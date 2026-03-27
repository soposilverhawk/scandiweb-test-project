<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class ProductType {
    public static function getType(): ObjectType {
        return new ObjectType([
            'name' => 'Product',
            'fields' => [
                'id' => Type::nonNull(Type::int()),
                'uid' => Type::nonNull(Type::string()),
                'name' => Type::string(),
                'stock' => Type::int(),
                'category' => Type::string(),
                'brand' => Type::string(),
                'description' => Type::string(),
                'gallery' => Type::listOf(Type::string()),
                'prices' => Type::listOf(PriceType::getType()),
                'attributes' => Type::listOf(AttributeType::getType()),
            ],
        ]);
    }
}