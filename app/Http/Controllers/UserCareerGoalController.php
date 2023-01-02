<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\UserCareerGoal;
use App\Http\Requests\StoreUserCareerGoalRequest;
use Illuminate\Http\Request;

class UserCareerGoalController extends Controller
{
    public function __invoke(StoreUserCareerGoalRequest $request)
    {
        $user = Auth::user();
        $goal = UserCareerGoal::updateOrCreate(
            ['user_id' => $user->id],
            ['description' => $request->description, 'type' => $request->type, 'user_id' => $user->id]
        );

        return response()->json([
            'type' => $goal->type,
            'description' => $goal->description,
        ]);
    }
}
