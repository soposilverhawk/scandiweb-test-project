<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AttributeType
{
    private static ?ObjectType $instance = null;

    public static function getType(): ObjectType
    {
        if (self::$instance === null) {
            self::$instance = new ObjectType([
                'name' => 'Attribute',
                'fields' => fn() => [
                    'id' => Type::nonNull(Type::int()),
                    'name' => Type::string(),
                    'type' => Type::string(),
                    'items' => Type::listOf(AttributeItemType::getType()),
                ],
            ]);
        }

        return self::$instance;
    }
}
