<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class SubscriptionController extends Controller
{
    public function cancel(Request $request)
    {
        //return Inertia::render('Settings/CancelPremium');

        $user = Auth::user();

        $user->subscription('1')->cancel();

        return Redirect::route('settings')->with('success', 'Cancel subscription');
    }

    public function process(Request $request)
    {
        $user = Auth::user();

        //return dd($request);
        $plan = Plan::find($request->plan);

 
        Auth::user()
            ->newSubscription($request->plan, $plan->stripe_plan)
            ->trialDays(30)
            ->create($request->token);

        $today = Carbon::now();
        $end = Carbon::now()->addDays(30);

        return Inertia::render('Subscription/Success',  [
            'name' => $user->profile->first_name . ' ' . $user->profile->last_name,
            'date' => $today->format('d/m/Y'),
            'start' => $today->format('F d, Y'),
            'end' => $end->format('F d, Y')
        ]);
    }

}
