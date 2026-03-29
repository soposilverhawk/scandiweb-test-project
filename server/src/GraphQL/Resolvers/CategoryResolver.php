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
        return $this->query->getCategories();
    }

    public function category($root, array $args): ?array
    {
        return $this->query->getCategoryById($args['id']);
    }
}