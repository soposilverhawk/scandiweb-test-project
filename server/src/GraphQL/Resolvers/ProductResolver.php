<?php

namespace App\GraphQL\Resolvers;

use App\GraphQL\Queries\ProductQuery;

class ProductResolver
{
    private ProductQuery $query;

    public function __construct(ProductQuery $query)
    {
        $this->query = $query;
    }

    public function products(): array
    {
        return $this->query->getProducts();
    }

    public function product($root, array $args): ?array
    {
        return $this->query->getProductById($args['id']);
    }
}