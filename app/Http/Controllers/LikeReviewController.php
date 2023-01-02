<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreLikeReviewRequest;
use App\Models\LikeReview;
use Illuminate\Http\Request;

class LikeReviewController extends Controller
{
    public function __invoke(StoreLikeReviewRequest $request)
    {
        $review = $request->review_id;
        $user = Auth::user();

        $like = LikeReview::where([
            ['user_id', '=', $user->id],
            ['review_id', $review]
        ])->first();

        if ($like)
        {
            $like->delete();
            return response()->json([
                'liked' => false,
            ]);
        }
        if($like == null) {
            LikeReview::create([
                'user_id' => $user->id,
                'review_id' => $review
            ]);
            return response()->json([
                'liked' => true,
            ]);
        }
        /*else{
            $like->delete();
            return response()->json([
                'liked' => false,
            ]);
        }
        */

        return;
    }
}
