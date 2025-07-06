<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    public function run()
    {
        $settings = [
            [
                'key' => 'wasto_achievements_description',
                'value' => 'Discover our milestones in sustainable waste management and environmental conservation',
                'type' => 'textarea',
                'group' => 'wasto_achievements',
                'label' => 'Our Achievements Description'
            ],
            [
                'key' => 'who_we_are_subtitle',
                'value' => '100% Filipino-owned corporation established in the year 2007',
                'type' => 'text',
                'group' => 'who_we_are',
                'label' => 'Who We Are Subtitle'
            ],
            [
                'key' => 'who_we_are_description',
                'value' => 'We create and implement innovative cause-oriented projects, products, and programs that highlight the Filipino spirit of creativity, ingenuity, and values through synergies with the public and private sector, NGOs and other social & civic organizations',
                'type' => 'textarea',
                'group' => 'who_we_are',
                'label' => 'Who We Are Description'
            ],
            [
                'key' => 'who_we_are_image',
                'value' => 'settings/who-we-are-image.png',
                'type' => 'image',
                'group' => 'who_we_are',
                'label' => 'Who we are image'
            ],
            [
                'key' => 'mission_vision_description',
                'value' => 'Our mission is to be a leader in creating "PRO-POORTUNITIES" — opportunities that uplift and support underprivileged and marginalized communities
ADDSI strive to make a lasting and positive impact on the lives of our people, fostering a culture of inclusivity, growth, and social responsibility. Together, we aim to build a brighter future for all, driven by innovation, compassion, and the shared values that define us as a nation
',
                'type' => 'textarea',
                'group' => 'mission_vision',
                'label' => 'Mission and Vision Description'
            ],
            [
                'key' => 'mission_vision_image',
                'value' => 'settings/mission-vision-img.png',
                'type' => 'image',
                'group' => 'mission_vision',
                'label' => 'Mission and Vision Image'
            ],
            [
                'key' => 'flute_sheet_description',
                'value' => 'A revolutionary solution for indoor and outdoor printing materials, these flute sheets are designed to be eco-friendly.',
                'type' => 'textarea',
                'group' => 'flute_sheet',
                'label' => 'Flute Sheet Description'
            ],
            [
                'key' => 'flute_sheet_subtext',
                'value' => 'Unlike traditional options that often end up in oceans and landfills, these sheets can be easily repurposed, offering a sustainable alternative.',
                'type' => 'textarea',
                'group' => 'flute_sheet',
                'label' => 'Flute Sheet Subtext'
            ],
            [
                'key' => 'flute_sheet_benefits',
                'value' => 'Durable, UV Protected, Light-weight, Water-resistant, 100% Recyclable, Eco-friendly',
                'type' => 'text',
                'group' => 'flute_sheet',
                'label' => 'Flute Sheet Benefits (comma-separated)'
            ],
            [
                'key' => 'flute_sheet_image',
                'value' => 'settings/rfs.png',
                'type' => 'image',
                'group' => 'flute_sheet',
                'label' => 'Flute Sheet Image'
            ],
            [
                'key' => 'wasto_hero_bg_img',
                'value' => 'settings/wasto_hero_bg_img.png',
                'type' => 'textarea',
                'group' => 'wasto',
                'label' => 'WASTO Basic Essentials Description'
            ],
            [
                'key' => 'wasto_basic_essentials_description',
                'value' => 'We are promoting the use of upcycled materials since we use plastics as basics in our daily lives.',
                'type' => 'textarea',
                'group' => 'wasto',
                'label' => 'WASTO Basic Essentials Description'
            ],
            [
                'key' => 'wasto_basic_essentials_subtext',
                'value' => 'Each purchase contributes to Conservation of Ocean Resources & Aquatic Life (CORAL) and Women on Waste (WOW) program.',
                'type' => 'textarea',
                'group' => 'wasto',
                'label' => 'WASTO Basic Essentials Subtext'
            ]
        ];

        foreach ($settings as $setting) {
            Setting::create($setting);
        }
    }
} 