<?php

namespace App\GraphQL\Resolvers;

use App\Services\Category\CategoryQuery;
use App\Transformers\CategoryTransformer;

class CategoryResolver
{
    private CategoryQuery $query;

    public function __construct(CategoryQuery $query)
    {
        $this->query = $query;
    }

    public function categories(): array
    {
        return array_map(
            fn($category) => CategoryTransformer::toArray($category),
            $this->query->getCategories()
        );
    }

    public function category($root, array $args): ?array
    {
        $category = $this->query->getCategoryById($args['id']);
        if (!$category) return null;
        return $category ? CategoryTransformer::toArray($category) : null;
    }
}