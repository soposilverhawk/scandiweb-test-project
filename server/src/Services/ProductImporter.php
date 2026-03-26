<?php

namespace App\Services;

use App\Models\Product\ClothesProduct;
use App\Models\Product\TechProduct;
use App\Models\Attribute\TextAttribute;
use App\Models\Attribute\SwatchAttribute;
use App\Repositories\CategoryRepository;
use App\Repositories\ProductRepository;

class ProductImporter
{
    private CategoryRepository $categoryRepo;
    private ProductRepository $productRepo;

    public function __construct(
        CategoryRepository $categoryRepo,
        ProductRepository $productRepo
    ) {
        $this->categoryRepo = $categoryRepo;
        $this->productRepo  = $productRepo;
    }

    public function import(array $json): void
    {
        $categories = $json['data']['categories'];
        $products   = $json['data']['products'];

        // 1) IMPORT CATEGORIES
        $categoryMap = $this->importCategories($categories);

        // 2) IMPORT PRODUCTS
        $this->importProducts($products, $categoryMap);
    }

    /* ============================================================
       CATEGORIES
    ============================================================ */
    private function importCategories(array $categories): array
    {
        $map = [];

        foreach ($categories as $cat) {

            $id = $this->categoryRepo->findIdByName($cat['name']);

            if (!$id) {
                $id = $this->categoryRepo->insert($cat['name']);
            }

            $map[$cat['name']] = $id;
        }

        return $map;
    }

    /* ============================================================
       PRODUCTS
    ============================================================ */
    private function importProducts(array $products, array $categoryMap): void
    {
        foreach ($products as $p) {

            $categoryName = $p['category'];

            // Determine product class based on category
            $productClass = match ($categoryName) {
                'clothes' => ClothesProduct::class,
                'tech'    => TechProduct::class,
                default => throw new \Exception("Unknown category '$categoryName'")
            };

            // Build attribute objects
            $attributes = [];

            foreach ($p['attributes'] as $attr) {
                $class = $attr['type'] === 'text'
                    ? TextAttribute::class
                    : SwatchAttribute::class;

                $attributes[$attr['name']] = new $class(
                    $attr['id'],
                    $attr['name'],
                    $attr['type'],
                    $attr['items']
                );
            }

            // Create product model instance
            $product = new $productClass(
                $p['id'],
                $p['name'],
                $p['inStock'],
                $p['brand'],
                $p['description'],
                $p['gallery'],
                $attributes,
                $p['prices']
            );

            // Check if product exists in DB
            $productId = $this->productRepo->findIdByUid($product->getId());

            $data = [
                'uid'         => $product->getId(),
                'name'        => $product->getName(),
                'stock'       => $product->isInStock() ? 1 : 0,
                'category_id' => $categoryMap[$categoryName],
                'brand'       => $product->getBrand(),
                'description' => $product->getDescription()
            ];

            if ($productId) {
                // Update base product data
                $this->productRepo->update($productId, $data);

                // 🔥 Remove all related rows (so no duplicates)
                $this->productRepo->deleteRelations($productId);

            } else {
                // Insert new product if not found
                $productId = $this->productRepo->insert($data);
            }

            /* ============================================================
               INSERT GALLERY
            ============================================================ */
            foreach ($product->getGallery() as $url) {
                $this->productRepo->insertGalleryImage($productId, $url);
            }

            /* ============================================================
               INSERT PRICES
            ============================================================ */
            foreach ($product->getPrices() as $price) {
                $this->productRepo->insertPrice(
                    $productId,
                    $price['amount'],
                    $price['currency']['label'],
                    $price['currency']['symbol']
                );
            }

            /* ============================================================
               INSERT ATTRIBUTES + ITEMS
            ============================================================ */
            foreach ($product->getAttributes() as $attr) {

                $attrId = $this->productRepo->insertAttribute([
                    'attribute_id' => $attr->getId(),
                    'product_id'   => $productId,
                    'name'         => $attr->getName(),
                    'type'         => $attr->getType()
                ]);

                foreach ($attr->getItems() as $item) {

                    $this->productRepo->insertAttributeItem([
                        'attribute_item_id' => $item->getId(),
                        'display'           => $item->getDisplayValue(),
                        'value'             => $item->getValue(),
                        'attribute_id'      => $attrId
                    ]);
                }
            }
        }
    }
}