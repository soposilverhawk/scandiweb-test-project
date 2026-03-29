<?php

namespace App\Services\Category;

use App\Repositories\CategoryRepository;

class CategoryService 
{
    private CategoryRepository $repo;

    public function __construct(CategoryRepository $repo) {
        $this->repo = $repo;
    }

    public function getAllCategories(): array {
        return $this->repo->findAll();
    }

    public function getCategory(int $id): ?array {
        return $this->repo->findById($id);
    }
}