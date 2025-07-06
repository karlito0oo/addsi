<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WastoAchievement extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image',
        'achievement_date',
        'order'
    ];

    protected $casts = [
        'achievement_date' => 'date'
    ];
} 