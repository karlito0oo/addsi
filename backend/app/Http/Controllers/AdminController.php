<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class AdminController extends Controller
{
    public function index()
    {
        return response()->json(User::where('is_admin', true)->get());
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Password::defaults()],
            'is_active' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'is_admin' => true,
            'role' => 'super_admin',
            'is_active' => $request->is_active ?? true
        ]);

        return response()->json($user, 201);
    }

    public function update(Request $request, User $admin)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $admin->id,
            'is_active' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $admin->update([
            'name' => $request->name,
            'email' => $request->email,
            'role' => 'super_admin',
            'is_active' => $request->is_active ?? true
        ]);

        return response()->json($admin);
    }

    public function destroy(User $admin)
    {
        if ($admin->id === auth()->id()) {
            return response()->json(['error' => 'Cannot delete your own account'], 403);
        }

        $admin->delete();
        return response()->json(null, 204);
    }

    public function changePassword(Request $request, User $admin)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => ['required_if:self,true'],
            'password' => ['required', 'confirmed', Password::defaults()],
            'self' => 'required|boolean'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // If changing own password, verify current password
        if ($request->self) {
            if (!Hash::check($request->current_password, auth()->user()->password)) {
                return response()->json(['error' => 'Current password is incorrect'], 422);
            }
        } else {
            // Only super_admin can change other admin passwords
            if (auth()->user()->role !== 'super_admin') {
                return response()->json(['error' => 'Unauthorized'], 403);
            }
        }

        $admin->update([
            'password' => Hash::make($request->password)
        ]);

        return response()->json(['message' => 'Password updated successfully']);
    }
} 