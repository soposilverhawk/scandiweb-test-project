<?php

namespace App\Models\Product;

use App\Models\Category\ClothesCategory;

class ClothesProduct extends Product
{
    public function __construct(
        string $id,
        string $productUID,
        string $name,
        bool $inStock,
        string $brand,
        string $description,
        array $gallery = [],
        array $attributes = [],
        array $prices = []
    ) {
        $categoryObject = new ClothesCategory();
        parent::__construct($id, $productUID, $name, $inStock, $categoryObject, $brand, $description, $gallery, $attributes, $prices);
    }

    public function getType(): string
    {
        return $this->categoryObject->getName();
    }
}