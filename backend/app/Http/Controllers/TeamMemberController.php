<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TeamMemberController extends Controller
{
    public function index()
    {
        return response()->json(TeamMember::orderBy('order')->get());
    }

    public function store(Request $request)
    {
        $imageRule = $request->category === 'support' ? 'nullable' : 'required|image|max:2048';

        $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'bio' => 'required|string',
            'category' => 'required|in:leadership,support',
            'order' => 'required|integer',
            'image' => $imageRule,
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $this->handleImageUpload($request->file('image'));
        }

        $teamMember = TeamMember::create([
            'name' => $request->name,
            'position' => $request->position,
            'bio' => $request->bio,
            'category' => $request->category,
            'order' => $request->order,
            'image' => $imagePath,
        ]);

        return response()->json($teamMember, 201);
    }

    public function update(Request $request, TeamMember $teamMember)
    {
        $validationRules = [
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'bio' => 'required|string',
            'category' => 'required|in:leadership,support',
            'order' => 'required|integer',
        ];

        // Only validate image if it's being uploaded
        if ($request->hasFile('image')) {
            $validationRules['image'] = 'image|max:2048';
        }

        $request->validate($validationRules);

        $data = $request->except('image');

        if ($request->hasFile('image')) {
            // Delete old image
            if ($teamMember->image) {
                Storage::delete('public/' . $teamMember->image);
            }
            $data['image'] = $this->handleImageUpload($request->file('image'));
        }

        $teamMember->update($data);

        return response()->json($teamMember);
    }

    public function destroy(TeamMember $teamMember)
    {
        if ($teamMember->image) {
            Storage::delete('public/' . $teamMember->image);
        }
        
        $teamMember->delete();

        return response()->json(null, 204);
    }

    private function handleImageUpload($image)
    {
        $filename = Str::random(40) . '.' . $image->getClientOriginalExtension();
        $path = $image->storeAs('team-members', $filename, 'public');
        return $path;
    }
} 