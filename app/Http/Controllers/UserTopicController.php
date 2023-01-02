<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreInterestsProfileRequest;
use App\Models\User;
use App\Models\UserTopic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class UserTopicController extends Controller
{
    public function __invoke(StoreInterestsProfileRequest $request)
    {
        $user = Auth::user();
        $interests = $request->interests;

        foreach ($interests as $interest) {
            UserTopic::create([
                'user_id' => $user->id,
                'topic_id' => $interest
            ]);
        }

        User::where('id',$user->id)->update(['hasProfile' => now()]);

        return Redirect::route('courses');
    }
}
