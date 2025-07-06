<?php

namespace App\Http\Controllers;

use App\Models\WastoAchievement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class WastoAchievementController extends Controller
{
    public function index()
    {
        return WastoAchievement::orderBy('order')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'achievement_date' => 'nullable|date',
            'order' => 'integer'
        ]);

        $image = $request->file('image');
        $path = $image->store('achievements', 'public');

        $achievement = WastoAchievement::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'image' => $path,
            'achievement_date' => $request->input('achievement_date'),
            'order' => $request->input('order', 0)
        ]);

        return response()->json($achievement, 201);
    }

    public function show(WastoAchievement $achievement)
    {
        return $achievement;
    }

    public function update(Request $request, WastoAchievement $achievement)
    {
        // Log request details for debugging
        Log::info('Update request details', [
            'all' => $request->all(),
            'files' => $request->allFiles(),
            'headers' => $request->headers->all(),
            'method' => $request->method(),
            'isMethod' => $request->isMethod('PUT'),
        ]);

        $validationRules = [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'achievement_date' => 'nullable|date',
            'order' => 'integer'
        ];

        // Only validate image if it's being uploaded
        if ($request->hasFile('image')) {
            $validationRules['image'] = 'required|image|mimes:jpeg,png,jpg,gif|max:2048';
        }

        $validated = $request->validate($validationRules);

        $data = [
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'achievement_date' => $request->input('achievement_date'),
            'order' => $request->input('order', $achievement->order)
        ];

        if ($request->hasFile('image')) {
            // Delete old image
            if ($achievement->image) {
                Storage::disk('public')->delete($achievement->image);
            }
            
            // Store new image
            $image = $request->file('image');
            $path = $image->store('achievements', 'public');
            $data['image'] = $path;
        }

        $achievement->update($data);

        return response()->json($achievement);
    }

    public function destroy(WastoAchievement $achievement)
    {
        if ($achievement->image) {
            Storage::disk('public')->delete($achievement->image);
        }
        
        $achievement->delete();
        return response()->json(null, 204);
    }
} 