<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use App\Models\Plan;
use App\Models\User;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class PlanController extends Controller
{
    public function index()
    {
        /*
        $intent = auth()->user()->createSetupIntent();
        return Inertia::render('Subscription/Checkout',[
            'intent' => $intent
        ]);
        */
        $plans = Plan::get();
   
        return view("plans", compact("plans"));

    }

    public function checkout()
    {
        return Inertia::render('Subscription/Checkout',[
            'intent' => 'intents'
        ]);
    }

    public function show(Plan $plan,Request $request){

        $intent = auth()->user()->createSetupIntent();

        $today = Carbon::now();
        $end = Carbon::now()->addDays(30);
        return view("subscription", compact("plan", "intent", "today", "end"));
    }

    public function subscription(Request $request)
    {
        $user = Auth::user();
        //return dd($request);
        $plan = Plan::find($request->plan);

 
        Auth::user()
            ->newSubscription($request->plan, $plan->stripe_plan)
            ->trialDays(30)
            ->create($request->token);
   
        return view("subscription_success");
    }
}
