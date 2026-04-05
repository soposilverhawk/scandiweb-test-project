<?php

namespace App\Services\Category;

use App\Services\Category\CategoryService;
use App\Models\Category\Category;

class CategoryQuery 
{
    private CategoryService $service;

    public function __construct(CategoryService $service) {
        $this->service = $service;
    }

    public function getCategories(): array {
        return $this->service->getAllCategories();
    }

    public function getCategoryById(int $id): ?Category {
        return $this->service->getCategory($id);
    }
}