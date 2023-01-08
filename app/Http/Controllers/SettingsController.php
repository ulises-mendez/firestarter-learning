<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function __invoke()
    {
        $user = Auth::user();

        return Inertia::render('Settings/Index',[
            'subscription' => $user->subscribed('1'),
        ]);
    }

    public function billing()
    {
        $user = Auth::user();
        $timestamp = $user->subscription('1')->asStripeSubscription()->current_period_end;

        return Inertia::render('Settings/Billing',[
            'end' => Carbon::createFromTimeStamp($timestamp)->format('l jS \\of F Y h:i:s A')
        ]);
    }
}
