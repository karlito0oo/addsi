<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('wasto_products', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('image');
            $table->text('description');
            $table->enum('type', ['product', 'essential']);
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('wasto_products');
    }
}; 