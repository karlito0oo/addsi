<?php

namespace App\Http\Controllers;

use App\Models\WastoProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class WastoProductController extends Controller
{
    public function index(Request $request)
    {
        $query = WastoProduct::query();
        
        if ($request->has('type')) {
            $query->where('type', $request->type);
        }
        
        return $query->orderBy('order')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'category' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'type' => 'required|in:product,essential',
            'order' => 'integer'
        ]);

        $image = $request->file('image');
        $path = $image->store('products', 'public');

        $product = WastoProduct::create([
            'category' => $request->input('category'),
            'description' => $request->input('description'),
            'image' => $path,
            'type' => $request->input('type'),
            'order' => $request->input('order', 0)
        ]);

        return response()->json($product, 201);
    }

    public function show(WastoProduct $product)
    {
        return $product;
    }

    public function update(Request $request, WastoProduct $product)
    {
        // Log request details for debugging
        Log::info('Update request details', [
            'all' => $request->all(),
            'files' => $request->allFiles(),
            'headers' => $request->headers->all(),
            'method' => $request->method(),
        ]);

        $validationRules = [
            'category' => 'required|string|max:255',
            'description' => 'required|string',
            'type' => 'required|in:product,essential',
            'order' => 'integer'
        ];

        // Only validate image if it's being uploaded
        if ($request->hasFile('image')) {
            $validationRules['image'] = 'required|image|mimes:jpeg,png,jpg,gif|max:2048';
        }

        $validated = $request->validate($validationRules);

        $data = [
            'category' => $request->input('category'),
            'description' => $request->input('description'),
            'type' => $request->input('type'),
            'order' => $request->input('order', $product->order)
        ];

        if ($request->hasFile('image')) {
            // Delete old image
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            
            // Store new image
            $image = $request->file('image');
            $path = $image->store('products', 'public');
            $data['image'] = $path;
        }

        $product->update($data);

        return response()->json($product);
    }

    public function destroy(WastoProduct $product)
    {
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }
        
        $product->delete();
        return response()->json(null, 204);
    }
} 