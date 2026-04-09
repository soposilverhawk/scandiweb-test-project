<?php

namespace App\GraphQL\Resolvers;

use App\Services\Product\ProductService;
use App\Transformers\ProductTransformer;

class ProductResolver
{
    private ProductService $service;

    public function __construct(ProductService $service)
    {
        $this->service = $service;
    }

    public function products(): array
    {
        return array_map(
            fn($product) => ProductTransformer::toArray($product),
            $this->service->getAllProducts()
        );
    }

    public function product($root, array $args): ?array
    {
        $product = $this->service->getProduct($args['id']);
        if (!$product) return null;
        return $product ? ProductTransformer::toArray($product) : null;
    }
}