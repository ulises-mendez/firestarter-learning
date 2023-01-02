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
        Schema::create('lesson_plays', function (Blueprint $table) {
            $table->id();
            $table->timestamp('completed')->nullable();
            $table->integer('course_id');
            $table->integer('lesson_id');
            $table->integer('full_time')->nullable();
            $table->integer('time')->nullable();
            $table->integer('user_id');
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
        Schema::dropIfExists('lesson_plays');
    }
};
