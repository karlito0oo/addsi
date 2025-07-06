<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PartnerController extends Controller
{
    public function index()
    {
        return response()->json(Partner::orderBy('order')->get());
    }

    public function store(Request $request)
    {
        $validationRules = [
            'name' => 'required|string|max:255',
            'category' => 'required|in:government,nongovernment,private',
            'order' => 'required|integer',
        ];

        // Only validate image if it's being uploaded
        if ($request->hasFile('logo')) {
            $validationRules['logo'] = 'image|max:2048';
        }

        $request->validate($validationRules);

        $logoPath = $this->handleLogoUpload($request->file('logo'));

        $partner = Partner::create([
            'name' => $request->name,
            'logo' => $logoPath,
            'category' => $request->category,
            'order' => $request->order,
        ]);

        return response()->json($partner, 201);
    }

    public function update(Request $request, Partner $partner)
    {
        
        $validationRules = [
            'name' => 'required|string|max:255',
            'category' => 'required|in:government,nongovernment,private',
            'order' => 'required|integer',
        ];

        // Only validate image if it's being uploaded
        if ($request->hasFile('logo')) {
            $validationRules['logo'] = 'image|max:2048';
        }

        $request->validate($validationRules);

        $data = $request->except('logo');

        if ($request->hasFile('logo')) {
            // Delete old logo
            if ($partner->logo) {
                Storage::delete('public/' . $partner->logo);
            }
            $data['logo'] = $this->handleLogoUpload($request->file('logo'));
        }

        $partner->update($data);

        return response()->json($partner);
    }

    public function destroy(Partner $partner)
    {
        if ($partner->logo) {
            Storage::delete('public/' . $partner->logo);
        }
        
        $partner->delete();

        return response()->json(null, 204);
    }

    private function handleLogoUpload($logo)
    {
        $filename = Str::random(40) . '.' . $logo->getClientOriginalExtension();
        $path = $logo->storeAs('partners', $filename, 'public');
        return $path;
    }
} 