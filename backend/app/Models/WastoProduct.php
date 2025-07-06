<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WastoProduct extends Model
{
    protected $fillable = [
        'category',
        'image',
        'description',
        'type',
        'order'
    ];

    protected $casts = [
        'order' => 'integer'
    ];
} 