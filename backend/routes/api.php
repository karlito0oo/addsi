<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TeamMemberController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\WastoAchievementController;

// Public routes
Route::post('/login', [AuthController::class, 'login']);
Route::get('/team-members', [TeamMemberController::class, 'index']);
Route::get('/partners', [PartnerController::class, 'index']);
Route::get('/wasto-achievements', [WastoAchievementController::class, 'index']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // Team member management
    Route::post('/team-members', [TeamMemberController::class, 'store']);
    Route::post('/team-members/{teamMember}', [TeamMemberController::class, 'update']);
    Route::delete('/team-members/{teamMember}', [TeamMemberController::class, 'destroy']);
    
    // Partner routes
    Route::post('/partners', [PartnerController::class, 'store']);
    Route::post('/partners/{partner}', [PartnerController::class, 'update']);
    Route::delete('/partners/{partner}', [PartnerController::class, 'destroy']);

    // Wasto Achievements routes
    Route::post('/admin/wasto-achievements', [WastoAchievementController::class, 'store']);
    Route::post('/admin/wasto-achievements/{achievement}', [WastoAchievementController::class, 'update']);
    Route::delete('/admin/wasto-achievements/{achievement}', [WastoAchievementController::class, 'destroy']);

}); 