<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('learning_histories', function (Blueprint $table) {
            $table->uuid();
            $table->integer('user_id');
            $table->string('model_type');
            $table->integer('model_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('learning_histories');
    }
};
