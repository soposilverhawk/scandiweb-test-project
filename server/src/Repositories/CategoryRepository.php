<?php

namespace App\Repositories;

use App\Core\Database;
use PDO;

class CategoryRepository
{
    private PDO $pdo;

    public function __construct(Database $db)
    {
        $this->pdo = $db->connect(); // Get the PDO instance
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

    public function findAll(): array
    {
        $stmt = $this->pdo->query("SELECT id, name FROM categories");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function findById(int $id): ?array
    {
        $stmt = $this->pdo->prepare('
            SELECT id, name
            FROM categories
            WHERE id = :id
            LIMIT 1
        ');

        $stmt->execute(['id' => $id]);
        $category = $stmt->fetch(PDO::FETCH_ASSOC);

        return $category ?: null;
    }
}