<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserTopicController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
                ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
                ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
                ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
                ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
                ->name('password.update');
});

Route::middleware('auth')->group(function () {
    
    Route::get('verify-email', [EmailVerificationPromptController::class, '__invoke'])
                ->name('verification.notice');

                /*
    Route::get('verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
                ->middleware(['signed', 'throttle:6,1'])
                ->name('verification.verify');
*/
    /*
    /*
    Route::get('verify-email', function () {
        return Inertia::render('Auth/Verify');
    })
        ->name('verification.notice');
    */

    Route::get('/mail', function () {
        $invoice = [
            'nombre' => 'Ulises Eduardo',
            'apellido' => 'Mendez Lopez',
            'email' => 'memorandum06@gmail.com',
            'telefono' => '9512092706',
            'asunto'=> 'Inversiones',
            'mensaje'=> 'Proyectos de inversión ahora'
        ];
        return new App\Mail\VerifyEmailCode($invoice);
    });


    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('verification.send');

    Route::post('verify-email', [EmailVerificationPromptController::class, 'verify'])
    ->name('verification.verify');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
                ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');

    Route::get('profile', [ProfileController::class, 'index'])
    ->name('registration.profile');

    Route::post('profile', [ProfileController::class, 'store'])
    ->name('store.profile');

// PROFILE
    Route::get('ubication', [ProfileController::class, 'create'])
        ->name('profile.ubication');

    Route::post('ubication', [ProfileController::class, 'store_ubication'])
        ->name('store.ubication');

    Route::get('education', [ProfileController::class, 'create_education'])
        ->name('profile.education');

    Route::post('education', [ProfileController::class, 'store_education'])
    ->name('store.education');

    Route::get('interests', [ProfileController::class, 'create_interests'])
        ->name('profile.interests');

    Route::post('interests', UserTopicController::class,)
        ->name('store.interests');

    Route::middleware('hasProfile')->group(function () {

        Route::get('welcome', function () {
            return Inertia::render('Auth/Register/Welcome');
        })
            ->name('registration.welcome');

        Route::get('courses',[
            CourseController::class, 'index'
        ])
            ->name('courses');
        
    });


    //DASHBOARD
    Route::get('/dashboard', 
        DashboardController::class
    )
    ->name('dashboard');

});
