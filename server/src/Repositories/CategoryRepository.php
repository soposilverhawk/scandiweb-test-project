<?php

namespace App\Repositories;

use PDO;

class CategoryRepository
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function findIdByName(string $name): ?int
    {
        $stmt = $this->pdo->prepare('SELECT id FROM categories WHERE name = :name');
        $stmt->execute(['name' => $name]);

        $id = $stmt->fetchColumn();
        return $id ? (int)$id : null;
    }

    public function insert(string $name): int
    {
        $stmt = $this->pdo->prepare('INSERT INTO categories (name) VALUES (:name)');
        $stmt->execute(['name' => $name]);

        return (int)$this->pdo->lastInsertId();
    }
}