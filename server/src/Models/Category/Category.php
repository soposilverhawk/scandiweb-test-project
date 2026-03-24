<?php

namespace App\Models\Category;

abstract class Category
{
    protected string $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    abstract public function getName(): string;

    public function matches(string $cateogryName): bool
    {
        return $this->getName() === $cateogryName;
    }
}