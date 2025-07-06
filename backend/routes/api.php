<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TeamMemberController;

// Public routes
Route::post('/login', [AuthController::class, 'login']);
Route::get('/team-members', [TeamMemberController::class, 'index']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // Team member management
    Route::post('/team-members', [TeamMemberController::class, 'store']);
    Route::post('/team-members/{teamMember}', [TeamMemberController::class, 'update']);
    Route::delete('/team-members/{teamMember}', [TeamMemberController::class, 'destroy']);
}); 