<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class PriceType
{
    private static ?ObjectType $instance = null;

    public static function getType(): ObjectType
    {
        if (self::$instance === null) {
            self::$instance = new ObjectType([
                'name' => 'Price',
                'fields' => [
                    'amount' => Type::nonNull(Type::float()),
                    'currencyLabel' => Type::string(),
                    'currencySymbol' => Type::string(),
                ],
            ]);
        }

        return self::$instance;
    }
}