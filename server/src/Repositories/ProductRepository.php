<?php

namespace App\Repositories;

use App\Core\Database;
use PDO;

class ProductRepository
{
    private PDO $pdo;

    public function __construct(Database $db)
    {
        $this->pdo = $db->connect();
    }

    /* -------------------------------------------------------
     * PRODUCT
     * ------------------------------------------------------- */

    /** Find product by external UID from JSON */
    public function findIdByUid(string $uid): ?int
    {
        $stmt = $this->pdo->prepare("
            SELECT id FROM products WHERE product_uid = :uid
        ");
        $stmt->execute(['uid' => $uid]);

        $id = $stmt->fetchColumn();
        return $id !== false ? (int)$id : null;
    }

    /** Insert new product and return DB ID */
    public function insert(array $data): int
    {
        $stmt = $this->pdo->prepare("
            INSERT INTO products (product_uid, name, in_stock, category_id, brand, description)
            VALUES (:uid, :name, :stock, :category_id, :brand, :description)
        ");

        $stmt->execute([
            'uid'         => $data['uid'],
            'name'        => $data['name'],
            'stock'       => $data['stock'],
            'category_id' => $data['category_id'],
            'brand'       => $data['brand'],
            'description' => $data['description']
        ]);

        return (int)$this->pdo->lastInsertId();
    }

    /** Update the base product row */
    public function update(int $id, array $data): void
    {
        $stmt = $this->pdo->prepare("
            UPDATE products
            SET name = :name,
                in_stock = :stock,
                category_id = :category_id,
                brand = :brand,
                description = :description
            WHERE id = :id
        ");

        $stmt->execute([
            'id'          => $id,
            'name'        => $data['name'],
            'stock'       => $data['stock'],
            'category_id' => $data['category_id'],
            'brand'       => $data['brand'],
            'description' => $data['description']
        ]);
    }

    /* -------------------------------------------------------
     * CLEAN REPLACE (avoid duplicates)
     * ------------------------------------------------------- */
    public function deleteRelations(int $productId): void
    {
        // Gallery
        $this->pdo->prepare("
            DELETE FROM product_gallery WHERE product_id = :id
        ")->execute(['id' => $productId]);

        // Prices
        $this->pdo->prepare("
            DELETE FROM product_prices WHERE product_id = :id
        ")->execute(['id' => $productId]);

        // Attribute Items
        $this->pdo->prepare("
            DELETE pai FROM product_attribute_items pai
            INNER JOIN product_attributes pa ON pa.id = pai.attribute_id
            WHERE pa.product_id = :id
        ")->execute(['id' => $productId]);

        // Attributes
        $this->pdo->prepare("
            DELETE FROM product_attributes WHERE product_id = :id
        ")->execute(['id' => $productId]);
    }

    /* -------------------------------------------------------
     * GALLERY
     * ------------------------------------------------------- */

    public function insertGalleryImage(int $productId, string $url): void
    {
        $stmt = $this->pdo->prepare("
            INSERT INTO product_gallery (product_id, image_url)
            VALUES (:pid, :url)
        ");

        $stmt->execute(['pid' => $productId, 'url' => $url]);
    }

    /* -------------------------------------------------------
     * PRICES
     * ------------------------------------------------------- */

    public function insertPrice(
        int $productId,
        float $amount,
        string $label,
        string $symbol
    ): void {
        $stmt = $this->pdo->prepare("
            INSERT INTO product_prices (product_id, amount, currency_label, currency_symbol)
            VALUES (:pid, :amount, :label, :symbol)
        ");

        $stmt->execute([
            'pid'    => $productId,
            'amount' => $amount,
            'label'  => $label,
            'symbol' => $symbol
        ]);
    }

    /* -------------------------------------------------------
     * ATTRIBUTES
     * ------------------------------------------------------- */

    public function insertAttribute(array $data): int
    {
        $stmt = $this->pdo->prepare("
            INSERT INTO product_attributes (attribute_id, product_id, name, type)
            VALUES (:attr_id, :pid, :name, :type)
        ");

        $stmt->execute([
            'attr_id' => $data['attribute_id'],
            'pid'     => $data['product_id'],
            'name'    => $data['name'],
            'type'    => $data['type']
        ]);

        return (int)$this->pdo->lastInsertId();
    }

    public function insertAttributeItem(array $data): void
    {
        $stmt = $this->pdo->prepare("
            INSERT INTO product_attribute_items (attribute_item_id, display_value, attribute_item_value, attribute_id)
            VALUES (:item_id, :display, :value, :attr_id)
        ");

        $stmt->execute([
            'item_id' => $data['attribute_item_id'],
            'display' => $data['display'],
            'value'   => $data['value'],
            'attr_id' => $data['attribute_id']
        ]);
    }

    public function findAll(): array
    {
        $stmt = $this->pdo->query('SELECT * FROM products');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function findById(int $id): ?array
    {
        $stmt = $this->pdo->prepare('
            SELECT *
            FROM products
            WHERE id = :id
            LIMIT 1
        ');

        $stmt->execute(['id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC) ?: null;
    }
}