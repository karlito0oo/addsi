<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

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

        return response()->json($groupedSettings);
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

        try {
            if ($setting->type === 'image' && $request->hasFile('value')) {
                // Delete old image if it exists
                if ($setting->value) {
                    Storage::disk('public')->delete($setting->value);
                }

                $file = $request->file('value');
                
                // Create settings directory if it doesn't exist
                Storage::disk('public')->makeDirectory('settings');
                
                // Generate unique filename
                $extension = $file->getClientOriginalExtension();
                $filename = 'settings/' . Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) 
                    . '_' . Str::random(10) . '.' . $extension;

                // Store the file
                $path = $file->storeAs('', $filename, 'public');
                Log::info('File stored at path: ' . $path);
                
                if (!$path) {
                    throw new \Exception('Failed to store file');
                }
                
                $data['value'] = $filename;
            }

            $setting->update($data);
            return response()->json($setting);
            
        } catch (\Exception $e) {
            Log::error('Error updating setting: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to update setting: ' . $e->getMessage()], 500);
        }
    }
} 