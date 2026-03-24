<?php

namespace App\Models\Category;

class ClothesCategory extends Category
{
    public function __construct()
    {
        parent::__construct("clothes");
    }

    public function getName(): string
    {
        return "clothes";
    }
}