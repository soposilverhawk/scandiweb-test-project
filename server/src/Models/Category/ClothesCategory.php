<?php

namespace App\Models\Category;

class ClothesCategory extends Category
{
    public function __construct()
    {
        parent::__construct('clothes');
    }

    public function getRequiredAttributes(): array
    {
        return ['Size'];
    }

    public function validateAttributes(array $productAttributes): void
    {
        if (empty($productAttributes['Size'])) {
            throw new \Exception('Clothes must have a Size attribute');
        }
    }
}