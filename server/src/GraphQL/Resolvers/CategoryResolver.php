<?php

namespace App\GraphQL\Resolvers;

use App\GraphQL\Queries\CategoryQuery;

class CategoryResolver
{
    private CategoryQuery $query;

    public function __construct(CategoryQuery $query)
    {
        $this->query = $query;
    }

    public function categories(): array
    {
        return array_map(fn($category) => [
            'id' => $category->getId(),
            'name' => $category->getName(),
        ], $this->query->getCategories());
    }

    public function category($root, array $args): ?array
    {
        $category = $this->query->getCategoryById($args['id']);
        
        if (!$category) return null;

        return [
            'id' => $category->getId(),
            'name' => $category->getName(),
        ];
    }
}