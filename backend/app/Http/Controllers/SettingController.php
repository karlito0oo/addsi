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
        $query = Setting::query();
        
        if ($request->has('group')) {
            $query->where('group', $request->group);
        }
        
        return $query->orderBy('key')->get();
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

        if ($setting->type === 'image' && $request->hasFile('value')) {
            // Delete old image
            if ($setting->value) {
                Storage::disk('public')->delete($setting->value);
            }
            
            // Store new image
            $image = $request->file('value');
            $path = $image->store('settings', 'public');
            $setting->value = $path;
        } else {
            $setting->value = $request->input('value');
        }

        $setting->save();

        return response()->json($setting);
    }
} 