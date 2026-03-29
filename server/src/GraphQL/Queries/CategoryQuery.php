<?php

namespace App\GraphQL\Queries;

use App\Services\Category\CategoryService;

class CategoryQuery 
{
    private CategoryService $service;

    public function __construct(CategoryService $service) {
        $this->service = $service;
    }

    public function getCategories(): array {
        return $this->service->getAllCategories();
    }

    public function getCategoryById(int $id): ?array {
        return $this->service->getCategory($id);
    }
}