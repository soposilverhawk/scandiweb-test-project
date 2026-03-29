<?php

namespace App\Factories;

use App\Models\Category\Category;
use App\Models\Category\ClothesCategory;
use App\Models\Category\TechCategory;
use App\Models\Category\AllCategory;

class CategoryFactory
{
    /**
     * Create an Attribute instance based on type.
     *
     * @param string $type "text" or "swatch"
     * @param array $data Attribute data: id, name, items
     * @return Attribute
     * @throws \Exception
     */
    public static function create(string $name): Category
    {
        return match(strtolower($name)) {
            'clothes' => new ClothesCategory(),
            'tech' => new TechCategory(),
            'all' => new AllCategory(),
        };
    }
}