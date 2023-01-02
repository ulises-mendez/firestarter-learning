<?php

namespace App\Http\Controllers\Auth;

use Auth as Authentication;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

use App\Models\User;
use Inertia\Inertia;

class EmailVerificationPromptController extends Controller
{
    /**
     * Display the email verification prompt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        return $request->user()->hasVerifiedEmail()
                    ? redirect()->intended(RouteServiceProvider::HOME)
                    : Inertia::render('Auth/Verify', ['status' => session('status')]);
    }

    public function verify(Request $request){
        $request->validate([
            'code' => 'required|string|max:100',
            ], [
            'code.required' => 'Verification code is required.',
            ]);

        $request_token = $request->get('code');
        $user = User::findOrFail($request->user()->id);
        $token = $user->otp;
        if($request_token == $token)
        {
            $user->update([
                'otp' => null,
                'email_verified_at' => now()
            ]);

            return Redirect::route(RouteServiceProvider::HOME)->with('success', 'Your email has been verificated.');
        }
        else
        {
            return Redirect::back()->withErrors(['code' => 'The code you entered is incorrect' . $token . '.']);
        }
    }
}
