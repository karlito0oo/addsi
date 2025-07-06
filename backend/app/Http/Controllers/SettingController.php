<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class SettingController extends Controller
{
    public function index(Request $request)
    {
        $group = $request->query('group');
        $settings = $group ? Setting::where('group', $group)->get() : Setting::all();
        return response()->json($settings);
    }

    public function getPublicSettings()
    {
        $cacheKey = 'public_settings';
        $cacheDuration = 60 * 24; // 24 hours

        return response()->json(
            cache()->remember($cacheKey, $cacheDuration, function () {
                $settings = Setting::whereIn('group', [
                    'who_we_are',
                    'mission_vision',
                    'wasto_achievements',
                    'basic_essentials',
                    'flute_sheet'
                ])->get();

                // Group settings by their group
                $groupedSettings = $settings->groupBy('group')->map(function ($groupSettings) {
                    return $groupSettings->reduce(function ($acc, $setting) {
                        $acc[$setting->key] = $setting->value;
                        return $acc;
                    }, []);
                });

                return $groupedSettings;
            })
        );
    }

    public function update(Request $request, Setting $setting)
    {
        Log::info('Update setting request details', [
            'all' => $request->all(),
            'files' => $request->allFiles(),
            'headers' => $request->headers->all(),
            'method' => $request->method(),
        ]);

        $validationRules = [
            'value' => 'required'
        ];

        if ($setting->type === 'image' && $request->hasFile('value')) {
            $validationRules['value'] = 'required|image|mimes:jpeg,png,jpg,gif|max:2048';
        }

        $validated = $request->validate($validationRules);

        $data = $request->all();
        
        if ($request->hasFile('value')) {
            $file = $request->file('value');
            $filename = 'settings/' . $file->getClientOriginalName();
            $file->storeAs('public', $filename);
            $data['value'] = $filename;
        }
        
        $setting->update($data);

        // Clear the settings cache
        cache()->forget('public_settings');

        return response()->json($setting);
    }
} 