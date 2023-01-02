<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plan;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
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

    public function show(Plan $plan,Request $request){
       /*
        $intent = auth()->user()->createSetupIntent();

        return response()->json(
            $intent
        );
        */
        $intent = auth()->user()->createSetupIntent();
   
        return view("subscription", compact("plan", "intent"));
    }

    public function subscription(Request $request)
    {
        dd($request);
        /*

        [
        "_token" => "y3j6O4pgvJkeN7tFG1w1jVliptgklzRlDFWlp7Rf"
        "plan" => "1"
        "name" => "Ulises"
        "token" => "pm_1M8Ri7HOSZzHYeBQhn1Kpp5X"
        ]

        $plan = Plan::find(1);
   
        $subscription = $request->user()->newSubscription(
            'premium',
            $plan->stripe_plan)
                        ->create($request->token);
   
        return "subscription_success";
        */
        $plan = Plan::find($request->plan);

 
        $subscription = $request->user()->newSubscription($request->plan, $plan->stripe_plan)
                        ->create($request->token);
   
        return view("subscription_success");
    }
}
