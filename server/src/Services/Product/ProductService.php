<?php

namespace App\Services\Product;

use App\Repositories\ProductRepository;

class ProductService 
{
    private ProductRepository $repo;

    public function __construct(ProductRepository $repo) {
        $this->repo = $repo;
    }

    public function getAllProducts(): array {
        return $this->repo->findAll();
    }

    public function getProduct(int $id): ?array {
        return $this->repo->findById($id);
    }
}