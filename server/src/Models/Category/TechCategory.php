<?php

namespace App\Models\Category;

class TechCategory extends Category
{
    public function __construct()
    {
        parent::__construct('tech');
    }

    public function getRequiredAttributes(): array
    {
        return [];
    }

    public function validateAttributes(array $productAttributes): void
    {
        return;
    }
}