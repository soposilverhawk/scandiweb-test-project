<?php

namespace App\Services\Product;

use App\Models\Product\Product;
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

    public function getProductById(int $id): ?Product {
        return $this->service->getProduct($id);
    }
}