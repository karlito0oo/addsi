<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    protected $fillable = [
        'name',
        'position',
        'bio',
        'image',
        'category',
        'order',
    ];

    protected $casts = [
        'order' => 'integer',
    ];
} 