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
        Schema::create('education', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('level');
            $table->string('field');
            $table->string('college');
            $table->string('city');
            $table->integer('from_month');
            $table->integer('from_year');
            $table->boolean('currently');
            $table->integer('to_month')->nullable();
            $table->integer('to_year')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('education');
    }
};
