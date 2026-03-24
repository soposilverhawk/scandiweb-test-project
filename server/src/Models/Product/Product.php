<?php

namespace App\Models\Product;

use App\Models\Category\Category;

abstract class Product
{
    protected string $id;
    protected string $name;
    protected bool $inStock;
    protected string $categoryName;
    protected string $brand;
    protected string $description;
    protected array $gallery;
    protected array $attributes;
    protected array $prices;

    protected Category $categoryObject;

    public function __construct(
        string $id,
        string $name,
        bool $inStock,
        Category $categoryObject,
        string $brand,
        string $description,
        array $gallery = [],
        array $attributes = [],
        array $prices = []
    ) {
        $this->id = $id;
        $this->name = $name;
        $this->inStock = $inStock;
        $this->categoryObject = $categoryObject;
        $this->categoryName = $categoryObject->getName();
        $this->brand = $brand;
        $this->description = $description;
        $this->gallery = $gallery;
        $this->attributes = $attributes;
        $this->prices = $prices;

        // Delegate validation to the category
        $this->validateAttributes($attributes);
    }

    // Abstract methods for subclasses
    abstract public function getType(): string;

    // Common getters
    public function getId(): string 
    { 
        return $this->id; 
    }

    public function getName(): string {
        return $this->name; 
    }

    public function isInStock(): bool {
        return $this->inStock; 
    }

    public function getCategoryName(): string {
        return $this->categoryName; 
    }

    public function getBrand(): string {
        return $this->brand; 
    }

    public function getDescription(): string {
        return $this->description; 
    }

    public function getGallery(): array {
        return $this->gallery; 
    }

    public function getAttributes(): array {
        return $this->attributes; 
    }

    public function getAttribute(string $name): mixed {
        return $this->attributes[$name] ?? null; 
    }

    public function getPrices(): array {
        return $this->prices; 
    }

    // Delegate category rules
    public function getRequiredAttributes(): array
    {
        return $this->categoryObject->getRequiredAttributes();
    }

    public function validateAttributes(array $attributes): void
    {
        $this->categoryObject->validateAttributes($attributes);
    }
}