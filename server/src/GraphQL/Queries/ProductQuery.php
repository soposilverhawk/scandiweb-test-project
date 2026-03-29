<?php

namespace App\GraphQL\Queries;

use App\Services\Product\ProductService;

class ProductQuery
{
    private ProductService $service;

    public function __construct(ProductService $service)
    {
        $this->service = $service;
    }

    public function getProducts(): array {
        return $this->service->getAllProducts();
    }

    public function getProductById(int $id): ?array {
        return $this->service->getProduct($id);
    }
}