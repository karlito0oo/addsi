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
                'key' => 'privacy_policy',
                'value' => '<h2>Privacy Policy</h2>
<p>At Alpha Distinct Development Solutions Inc. (ADDSI), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data.</p>

<h3>Information We Collect</h3>
<p>We collect information that you voluntarily provide to us when you:</p>
<ul>
    <li>Contact us through our website</li>
    <li>Sign up for our newsletter</li>
    <li>Participate in our programs</li>
    <li>Apply for employment</li>
</ul>

<h3>How We Use Your Information</h3>
<p>We use the collected information to:</p>
<ul>
    <li>Respond to your inquiries</li>
    <li>Process your applications</li>
    <li>Send you updates about our programs</li>
    <li>Improve our services</li>
</ul>

<h3>Data Protection</h3>
<p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

<h3>Your Rights</h3>
<p>You have the right to:</p>
<ul>
    <li>Access your personal information</li>
    <li>Request corrections to your data</li>
    <li>Withdraw your consent</li>
    <li>Request data deletion</li>
</ul>

<h3>Contact Us</h3>
<p>If you have questions about this Privacy Policy, please contact us at privacy@addsi.ph</p>',
                'type' => 'textarea',
                'group' => 'footer',
                'label' => 'Privacy Policy'
            ],
            [
                'key' => 'hero_tagline',
                'value' => 'Your Regenerative Sustainability Partner',
                'type' => 'text',
                'group' => 'hero',
                'label' => 'Alpha Hero Section Tagline'
            ],
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