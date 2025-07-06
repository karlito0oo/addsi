<?php

namespace Database\Seeders;

use App\Models\WastoAchievement;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class WastoAchievementSeeder extends Seeder
{
    public function run()
    {
        $achievements = [
            [
                'title' => 'Miss Earth 2022 Beauty Pageant Q&A',
                'description' => 'The pedestal used during the Q&A (Hashtag Round) of Miss Earth 2022 beauty pageant held at Okada, Manila is made from 33,788 pieces of single-use sachets taken out of the ocean, & the woven basket is made out of water hyacinth. The upcycled products were exclusively designed and made by Ecohome Art.',
                'image' => 'achievements/achivements1.png',
                'achievement_date' => '2022-11-29',
                'order' => 1
            ],
            [
                'title' => '4th Philippine Environment Summit',
                'description' => 'The launching of WASTO Waste Solutions products took place at the 4th Philippine Environment Summit on February 21-23 at the Taal Vista Hotel in Tagaytay, Cavite organized by Green Convergence and DENR with the theme: \'Caring for Earth: Scaling up Solutions to the Climate Emergency\'.',
                'image' => 'achievements/achivements2.png',
                'achievement_date' => '2023-02-21',
                'order' => 2
            ],
            [
                'title' => 'WASTO Waste Solutions Booth',
                'description' => 'WASTO Waste Solutions booth during the 4th Philippine Environment Summit, showcasing our innovative waste management solutions and sustainable products.',
                'image' => 'achievements/achivements3.png',
                'achievement_date' => null,
                'order' => 3
            ],
            [
                'title' => 'DENR-EMB Certification',
                'description' => 'With our recently acquired Certificate of Non-Coverage (CNC) from the DENR-EMB, we affirm that our initiatives have minimal environmental impact and comply with environmental regulations. This certification strengthens our commitment to responsible and sustainable development.',
                'image' => 'achievements/achivements4.png',
                'achievement_date' => '2024-11-09',
                'order' => 4
            ]
        ];

        // Create achievements directory if it doesn't exist
        Storage::disk('public')->makeDirectory('achievements');

        foreach ($achievements as $achievement) {
            // Copy images from public to storage
            $sourcePath = public_path('images/wasto/' . basename($achievement['image']));
            $destinationPath = storage_path('app/public/' . $achievement['image']);
            
            if (File::exists($sourcePath)) {
                File::copy($sourcePath, $destinationPath);
            }

            WastoAchievement::create($achievement);
        }
    }
} 