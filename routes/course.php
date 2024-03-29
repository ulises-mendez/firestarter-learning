<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseInstructorController;
use App\Http\Controllers\QuizController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

### COURSES SHOW
Route::get('course/{slug}', [
    CourseController::class, 'show'
])
->name('course.show');
Route::get('course/{course_slug}/{lesson_slug}',
    [CourseController::class, 'show_lesson'
])
->name('course.lesson');



Route::middleware('auth')->group(function () {
    ### QUIZ
    Route::get('course/{course_slug}/quiz/{quiz}',
    [QuizController::class, 'show'
    ])
    ->name('course.quiz');
    
    Route::post('course/{course_slug}/quiz/{quiz}',
    [QuizController::class, 'quiz_answer'
    ])
    ->name('quiz.answer');


    ### ADMIN
    // INDEX
    Route::get('courses/admin', [
        CourseController::class, 'admin'])
    ->name('admin.courses');
    // CREATE
    Route::get('courses/create', [
        CourseController::class, 'create'
    ])
    ->name('course.create');
    // EDIT
    Route::get('courses/edit/{id}',[
        CourseController::class, 'edit'
    ])
    ->name('course.edit');
    // RELEASED
    Route::post('courses/update/{id}',[
        CourseController::class, 'release'
    ])
    ->name('course.release');
    // STORE
    Route::post('courses/create',[
        CourseController::class, 'store'
    ])
    ->name('course.store');
    // UPDATE
    Route::put('courses/update/{id}',[
        CourseController::class, 'update'
    ])
    ->name('course.update');
    Route::get('chapters/{course}', [
        CourseController::class, 'chapters'
    ])
    ->name('course.chapters');


    ### INSTRUCTORS
    Route::post('instructors', CourseInstructorController::class)
    ->name('course.instructor');

    // DELETE
    Route::delete('instructors/{course_instructor}', [
        CourseInstructorController::class, 'destroy'
    ])
    ->name('course.instructor.delete');

    ### QUIZES
    Route::post('quiz', [
        QuizController::class, 'store'
    ])
        ->name('quiz.store');


    /// Route::get('subtitles',[CourseController::class, 'sub']);
});