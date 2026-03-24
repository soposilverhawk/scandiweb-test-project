<?php

namespace App\Models\Category;

abstract class Category
{
    protected string $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function matches(string $categoryName): bool
    {
        return $this->getName() === $categoryName;
    }

    public function getDefaultAttributes(): array
    {
        return [];
    }

    abstract public function getRequiredAttributes(): array;

    abstract public function validateAttributes(array $productAttributes): void;
}