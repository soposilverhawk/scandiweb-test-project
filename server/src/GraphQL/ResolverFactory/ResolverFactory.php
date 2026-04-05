<?php

namespace App\GraphQL\ResolverFactory;

use App\Core\Database;
use App\GraphQL\Resolvers\CategoryResolver;
use App\GraphQL\Resolvers\ProductResolver;
use App\Repositories\CategoryRepository;
use App\Repositories\ProductRepository;
use App\Services\Category\CategoryQuery;
use App\Services\Category\CategoryService;
use App\Services\Product\ProductQuery;
use App\Services\Product\ProductService;

class ResolverFactory
{
    private static ?Database $db = null;

    private static function getDatabase(): Database
    {
        if (self::$db === null) {
            self::$db = new Database();
        }
        return self::$db;
    }

    public static function makeCategoryResolver(): CategoryResolver
    {
        $db = self::getDatabase();
        $repo = new CategoryRepository($db);
        $service = new CategoryService($repo);
        $query = new CategoryQuery($service);
        return new CategoryResolver($query);
    }

    public static function makeProductResolver(): ProductResolver
    {
        $db = self::getDatabase();
        $repo = new ProductRepository($db);
        $service = new ProductService($repo);
        $query = new ProductQuery($service);
        return new ProductResolver($query);
    }
}