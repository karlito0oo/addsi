<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Models\TeamMember;
use App\Models\Partner;
use App\Models\WastoAchievement;
use App\Models\WastoProduct;
use Illuminate\Http\Request;

class PublicDataController extends Controller
{
    public function index()
    {
        $cacheKey = 'public_data';
        $cacheDuration = 60 * 24; // 24 hours

        return response()->json(
            cache()->remember($cacheKey, $cacheDuration, function () {
                // Get settings grouped by their group
                $settings = Setting::all()->groupBy('group')->map(function ($groupSettings) {
                    return $groupSettings->reduce(function ($acc, $setting) {
                        $acc[$setting->key] = $setting->value;
                        return $acc;
                    }, []);
                });

                // Get other data
                $teamMembers = TeamMember::orderBy('order')->get();
                $partners = Partner::orderBy('order')->get();
                $wastoAchievements = WastoAchievement::orderBy('order')->get();
                $wastoProducts = WastoProduct::orderBy('order')->get();

                return [
                    'settings' => $settings,
                    'teamMembers' => $teamMembers,
                    'partners' => $partners,
                    'wastoAchievements' => $wastoAchievements,
                    'wastoProducts' => $wastoProducts
                ];
            })
        );
    }
} 