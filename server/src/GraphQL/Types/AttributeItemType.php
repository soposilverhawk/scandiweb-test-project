<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AttributeItemType
{
    private static ?ObjectType $instance = null;

    public static function getType(): ObjectType
    {
        if (self::$instance === null) {
            self::$instance = new ObjectType([
                'name' => 'AttributeItem',
                'fields' => [
                    'id' => Type::nonNull(Type::int()),
                    'display' => Type::string(),
                    'value' => Type::string(),
                ],
            ]);
        }

        return self::$instance;
    }
}