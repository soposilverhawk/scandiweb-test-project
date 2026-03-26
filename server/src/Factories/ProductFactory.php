<?php

namespace App\Factories;

use App\Models\Product\Product;
use App\Models\Product\ClothesProduct;
use App\Models\Product\TechProduct;

class ProductFactory
{
     /**
     * Create a product instance based on category name.
     *
     * @param string $categoryName
     * @param array $data
     * @return Product
     * @throws \Exception
     */
    public static function create(string $categoryName, array $data): Product
    {
        // Map category to product class & category object
        return match ($categoryName) {
            'clothes' => new ClothesProduct(
                $data['id'],
                $data['name'],
                $data['inStock'],
                $data['brand'],
                $data['description'],
                $data['gallery'] ?? [],
                $data['attributes'] ?? [],
                $data['prices'] ?? []
            ),

            'tech' => new TechProduct(
                $data['id'],
                $data['name'],
                $data['inStock'],
                $data['brand'],
                $data['description'],
                $data['gallery'] ?? [],
                $data['attributes'] ?? [],
                $data['prices'] ?? []
            ),

            default => throw new \Exception('Unknown product category: "$categoryName"')
        };
    }
}