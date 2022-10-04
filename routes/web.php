<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::get('course', function () {
    return Inertia::render('Courses/Show');
})->name('course');

Route::get('me', function () {
    return Inertia::render('Profile/Show');
})->name('me');

Route::get('me/saved', function () {
    return Inertia::render('Profile/Saved');
})->name('me.saved');

Route::get('me/collections', function () {
    return Inertia::render('Profile/Collections');
})->name('me.collections');

Route::get('/curriculum', function () {
    return Inertia::render('Profile/Curriculum');
})->name('curriculum');

Route::get('subscription', function () {
    return Inertia::render('Subscription/Products');
})->name('subscription');

require __DIR__.'/auth.php';
