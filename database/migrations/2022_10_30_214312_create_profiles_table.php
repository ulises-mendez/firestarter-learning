<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('country')->nullable();
            $table->string('headline')->nullable();
            $table->text('description')->nullable();
            $table->string('street')->nullable();
            $table->string('city')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('level_education')->nullable();
            $table->string('field')->nullable();
            $table->string('school_name')->nullable();
            $table->string('school_country')->nullable();
            $table->string('school_city')->nullable();
            $table->json('topics')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
};
