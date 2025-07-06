<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class PartnerSeeder extends Seeder
{
    public function run(): void
    {
        // Clear the partners storage directory
        Storage::deleteDirectory('public/partners');
        Storage::makeDirectory('public/partners');

        // Sample partners data
        $partners = [
            // Government Partners
            [
                'name' => 'Government Partner 1',
                'category' => 'government',
                'order' => 1,
                'logo' => 'g_1.png'
            ],
            [
                'name' => 'Government Partner 2',
                'category' => 'government',
                'order' => 2,
                'logo' => 'g_2.png'
            ],
            [
                'name' => 'Government Partner 3',
                'category' => 'government',
                'order' => 3,
                'logo' => 'g_3.png'
            ],
            [
                'name' => 'Government Partner 4',
                'category' => 'government',
                'order' => 4,
                'logo' => 'g_4.png'
            ],
            [
                'name' => 'Government Partner 5',
                'category' => 'government',
                'order' => 5,
                'logo' => 'g_5.png'
            ],
            [
                'name' => 'Government Partner 6',
                'category' => 'government',
                'order' => 6,
                'logo' => 'g_6.png'
            ],
            // Non-Government Partners
            [
                'name' => 'NGO Partner 1',
                'category' => 'nongovernment',
                'order' => 1,
                'logo' => 'ng_1.png'
            ],
            [
                'name' => 'NGO Partner 2',
                'category' => 'nongovernment',
                'order' => 2,
                'logo' => 'ng_2.png'
            ],
            [
                'name' => 'NGO Partner 3',
                'category' => 'nongovernment',
                'order' => 3,
                'logo' => 'ng_3.png'
            ],
            [
                'name' => 'NGO Partner 4',
                'category' => 'nongovernment',
                'order' => 4,
                'logo' => 'ng_4.png'
            ],
            [
                'name' => 'NGO Partner 5',
                'category' => 'nongovernment',
                'order' => 5,
                'logo' => 'ng_5.png'
            ],
            [
                'name' => 'NGO Partner 6',
                'category' => 'nongovernment',
                'order' => 6,
                'logo' => 'ng_6.png'
            ],
            [
                'name' => 'NGO Partner 7',
                'category' => 'nongovernment',
                'order' => 7,
                'logo' => 'ng_7.png'
            ],
            [
                'name' => 'NGO Partner 8',
                'category' => 'nongovernment',
                'order' => 8,
                'logo' => 'ng_8.png'
            ],
            // Private Partners
            [
                'name' => 'Private Partner 1',
                'category' => 'private',
                'order' => 1,
                'logo' => 'p_1.png'
            ],
            [
                'name' => 'Private Partner 2',
                'category' => 'private',
                'order' => 2,
                'logo' => 'p_2.png'
            ],
            [
                'name' => 'Private Partner 3',
                'category' => 'private',
                'order' => 3,
                'logo' => 'p_3.png'
            ],
            [
                'name' => 'Private Partner 4',
                'category' => 'private',
                'order' => 4,
                'logo' => 'p_4.png'
            ],
            [
                'name' => 'Private Partner 5',
                'category' => 'private',
                'order' => 5,
                'logo' => 'p_5.png'
            ],
            [
                'name' => 'Private Partner 6',
                'category' => 'private',
                'order' => 6,
                'logo' => 'p_6.png'
            ],
            [
                'name' => 'Private Partner 7',
                'category' => 'private',
                'order' => 7,
                'logo' => 'p_7.png'
            ],
            [
                'name' => 'Private Partner 8',
                'category' => 'private',
                'order' => 8,
                'logo' => 'p_8.png'
            ],
            [
                'name' => 'Private Partner 9',
                'category' => 'private',
                'order' => 9,
                'logo' => 'p_9.png'
            ],
            [
                'name' => 'Private Partner 10',
                'category' => 'private',
                'order' => 10,
                'logo' => 'p_10.png'
            ],
            [
                'name' => 'Private Partner 11',
                'category' => 'private',
                'order' => 11,
                'logo' => 'p_11.png'
            ],
            [
                'name' => 'Private Partner 12',
                'category' => 'private',
                'order' => 12,
                'logo' => 'p_12.png'
            ],
        ];

        foreach ($partners as $partnerData) {
            // Copy the logo from public/images to storage/app/public/partners
            $sourcePath = base_path("../public/images/{$partnerData['logo']}");
            $destinationPath = "partners/{$partnerData['logo']}";
            
            if (File::exists($sourcePath)) {
                Storage::disk('public')->put($destinationPath, File::get($sourcePath));
                
                Partner::create([
                    'name' => $partnerData['name'],
                    'category' => $partnerData['category'],
                    'order' => $partnerData['order'],
                    'logo' => $destinationPath
                ]);
            } else {
                $this->command->warn("Image not found: {$partnerData['logo']}");
            }
        }
    }
} 