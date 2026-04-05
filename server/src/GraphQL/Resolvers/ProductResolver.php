<?php

namespace App\GraphQL\Resolvers;

use App\GraphQL\Queries\ProductQuery;
use App\Transformers\ProductTransformer;

class ProductResolver
{
    private ProductQuery $query;

    public function __construct(ProductQuery $query)
    {
        $this->query = $query;
    }

    public function products(): array
    {
        return array_map(
            fn($product) => ProductTransformer::toArray($product),
            $this->query->getProducts()
        );
    }

    public function product($root, array $args): ?array
    {
        $product = $this->query->getProductById($args['id']);
        return $product ? ProductTransformer::toArray($product) : null;
    }
}