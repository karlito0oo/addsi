<?php

namespace Database\Seeders;

use App\Models\TeamMember;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class TeamMemberSeeder extends Seeder
{
    public function run(): void
    {
        // Ensure the storage directory exists
        Storage::makeDirectory('public/team-members');

        // Copy existing team images to storage
        $this->copyImage('public/images/team1.jpg', 'team1.jpg');
        $this->copyImage('public/images/team2.jpg', 'team2.jpg');
        $this->copyImage('public/images/team3.jpg', 'team3.jpg');

        // Leadership Team
        TeamMember::create([
            'name' => 'NOEL IGNATIUS F. TAÑADA',
            'position' => 'President & CEO',
            'bio' => 'He has a vast experience in the Field of Design and has worked with global brands such as Ethan Allen, Crate & Barrel, and Ralph Lauren. Contributed his expertise to the Filipino design community by teaching Furniture Design at De La Salle–College of Saint Benilde, and has served as Vice President for Education and Board of Trustee member of the Chamber of Furniture Industries of the Philippines. He holds several patents for innovative and sustainable products registered under his name, and continuously develop new science & technology-based climate greenovations.',
            'image' => 'team-members/team1.jpg',
            'category' => 'leadership',
            'order' => 1,
        ]);

        TeamMember::create([
            'name' => 'MICHELLE BAUTISTA-TAÑADA',
            'position' => 'Chief Operating Officer',
            'bio' => 'A local and international marketing specialist with over 20 years of experience in Out-of-Home Brand Activation, she currently serves on the Board of Advisors of the Activasia Group of Companies. Her wide-ranging experiential and creative initiatives include collaborations with the Miss Earth Foundation Inc., as its eco advocacy partner. She advocates "Upcycling" as Co Founder of Philippine Alliance for Sustainable Solutions (PASS) Foundation. She also champions women empowerment as a member of the Board of Trustees of Balikatan Sa Kaunlaran National Foundation, the National Council of Women of the Philippines, and Ladies For A Cause.',
            'image' => 'team-members/team2.jpg',
            'category' => 'leadership',
            'order' => 2,
        ]);

        TeamMember::create([
            'name' => 'CRYSTAL "MIXY" B. DY',
            'position' => 'Chief Creative Officer',
            'bio' => 'Fashion Designer and Creative Entrepreneur who graduated Magna Cum Laude at the Fashion Institute of Technology in New York and advanced her Haute Couture at Central Saint Martins London. She has showcased her collections at multiple seasons of Philippine Fashion Week and worked with international names such as Roberta Einer and Kate Spade. As a Brand Strategist for leading multinational FMCGs, she brings creative direction to large-scale branding efforts. Beyond fashion, she serves as Special Projects Director of Balikatan Sa Kaunlaran National Foundation and creative consultant for Ms. Earth Foundation Inc., leading initiatives that harness design for sustainability, livelihood, and community empowerment.',
            'image' => 'team-members/team3.jpg',
            'category' => 'leadership',
            'order' => 3,
        ]);

        // Support Team
        TeamMember::create([
            'name' => 'MARISSA A. PAGLICAWAN, PH.D.',
            'position' => 'Science and Technology',
            'bio' => '',
            'image' => '',
            'category' => 'support',
            'order' => 1,
        ]);

        TeamMember::create([
            'name' => 'ENCARNACION N. RARALIO, PH.D., UAP, ENP',
            'position' => 'Environment and Architecture',
            'bio' => '',
            'image' => '',
            'category' => 'support',
            'order' => 2,
        ]);

        TeamMember::create([
            'name' => 'MARICHELLE ANN F. CARREON MM, HD, PHD, PD-SML',
            'position' => 'Livelihood Training',
            'bio' => '',
            'image' => '',
            'category' => 'support',
            'order' => 3,
        ]);
    }

    private function copyImage($source, $destination)
    {
        if (File::exists(public_path($source))) {
            File::copy(
                public_path($source),
                storage_path('app/public/team-members/' . $destination)
            );
        }
    }
} 