<?php

use App\Http\Controllers\CourseInstructorController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->group(function () {
    Route::post('instructors', CourseInstructorController::class)
    ->name('course.instructor');

    Route::delete('instructors/{course_instructor}', [
        CourseInstructorController::class, 'destroy'
    ])
    ->name('course.instructor.delete');
});