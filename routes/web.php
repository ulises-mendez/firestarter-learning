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

Route::get('courses', function () {
        return Inertia::render('Courses/Index');
    })->name('courses');

Route::get('course', function () {
    return Inertia::render('Courses/Show');
})->name('course');

Route::get('course/preview', function () {
    return Inertia::render('Courses/Preview');
})->name('course.preview');

Route::get('me', function () {
    return Inertia::render('Profile/Show');
})->name('me');

Route::get('me/saved', function () {
    return Inertia::render('Profile/Saved');
})->name('me.saved');

Route::get('me/collections', function () {
    return Inertia::render('Profile/Collections');
})->name('me.collections');

Route::get('me/history', function () {
    return Inertia::render('Profile/History');
})->name('me.history');

Route::get('curriculum', function () {
    return Inertia::render('Profile/Curriculum');
})->name('curriculum');

Route::get('settings', function () {
    return Inertia::render('Settings/Index');
})->name('settings');

Route::get('settings/billing-info', function () {
    return Inertia::render('Settings/Billing');
})->name('settings.billing');

Route::get('topics', function () {
    return Inertia::render('Topics/Show');
})->name('topics');

Route::get('settings/premium-manage-account', function () {
    return Inertia::render('Settings/ManagePremium');
})->name('settings.manage_premium');


// SUBS
Route::get('subscription', function () {
    return Inertia::render('Subscription/Products');
})->name('subscription');

Route::get('subscription/checkout', function () {
    return Inertia::render('Subscription/Checkout');
})->name('subscription.checkout');

// Help Center
Route::get('help', function () {
    return Inertia::render('HelpCenter/Index');
})->name('help.index');

Route::get('help/topic', function () {
    return Inertia::render('HelpCenter/Topic');
})->name('help.topic');

Route::get('help/article', function () {
    return Inertia::render('HelpCenter/Article');
})->name('help.article');

require __DIR__.'/auth.php';
