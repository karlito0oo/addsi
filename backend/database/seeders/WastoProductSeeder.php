<?php

namespace Database\Seeders;

use App\Models\WastoProduct;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class WastoProductSeeder extends Seeder
{
    public function run()
    {
        $products = [
            [
                'category' => 'Typhoon Disaster Response',
                'image' => 'products/p1.png',
                'description' => '',
                'type' => 'product',
                'order' => 1
            ],
            [
                'category' => 'Eco-Coolers',
                'image' => 'products/p2.png',
                'description' => '',
                'type' => 'product',
                'order' => 2
            ],
            [
                'category' => 'Drop Box',
                'image' => 'products/p3.png',
                'description' => '',
                'type' => 'product',
                'order' => 3
            ],
            [
                'category' => 'Salvabida',
                'image' => 'products/p4.png',
                'description' => '',
                'type' => 'product',
                'order' => 4
            ],
            [
                'category' => 'Street Furniture',
                'image' => 'products/p5.png',
                'description' => '',
                'type' => 'product',
                'order' => 5
            ],
            [
                'category' => 'Signage',
                'image' => 'products/p6.png',
                'description' => '',
                'type' => 'product',
                'order' => 6
            ],
            [
                'category' => 'Chairs and Table',
                'image' => 'products/p7.png',
                'description' => '',
                'type' => 'product',
                'order' => 7
            ],
            [
                'category' => 'Trash Bins',
                'image' => 'products/p8.png',
                'description' => '',
                'type' => 'product',
                'order' => 8
            ],
            // Basic Essentials
            [
                'category' => 'Crates',
                'image' => 'products/es1.png',
                'description' => 'Sustainable cooling solutions for everyday use',
                'type' => 'essential',
                'order' => 1
            ],
            [
                'category' => 'Chairs',
                'image' => 'products/es2.png',
                'description' => 'Convenient storage solutions',
                'type' => 'essential',
                'order' => 2
            ],
            [
                'category' => 'Bench & Tables',
                'image' => 'products/es3.png',
                'description' => 'Durable outdoor furniture solutions',
                'type' => 'essential',
                'order' => 3
            ],
            [
                'category' => 'Tumblers',
                'image' => 'products/es4.png',
                'description' => 'Clear and sustainable signage options',
                'type' => 'essential',
                'order' => 4
            ],
            [
                'category' => 'Tote Boxes',
                'image' => 'products/es5.png',
                'description' => 'Comfortable and eco-friendly furniture',
                'type' => 'essential',
                'order' => 5
            ]
        ];

        // Create products directory if it doesn't exist
        Storage::disk('public')->makeDirectory('products');

        foreach ($products as $product) {
            // Copy images from public to storage
            $sourceImage = $product['type'] === 'product' 
                ? 'p' . substr($product['image'], -5) 
                : 'es' . substr($product['image'], -5);
            
            $sourcePath = public_path('images/wasto/' . $sourceImage);
            $destinationPath = storage_path('app/public/' . $product['image']);
            
            if (File::exists($sourcePath)) {
                File::copy($sourcePath, $destinationPath);
            }

            WastoProduct::create($product);
        }
    }
} 