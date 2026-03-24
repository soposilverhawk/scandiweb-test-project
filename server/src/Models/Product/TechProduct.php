<?php

namespace App\Models\Product;

use App\Models\Category\TechCategory;

class TechProduct extends Product
{
    public function __construct(
        string $id,
        string $name,
        bool $inStock,
        string $brand,
        string $description,
        array $gallery = [],
        array $attributes = [],
        array $prices = []
    ) {
        $categoryObject = new TechCategory();
        parent::__construct($id, $name, $inStock, $categoryObject, $brand, $description, $gallery, $attributes, $prices);
    }

    public function getType(): string
    {
        return $this->categoryObject->getName();
    }
}