<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ReviewCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return $this->collection->map(
            function ($review) {
                return [
                    'id' => $review->id,
                    'content' => $review->content,
                    'created_at' => $review->created_at,
                    'rate' => $review->rate,
                    'user' => $review->user->profile->first_name . ' ' . $review->user->profile->last_name,
                    'like' => $review->like()
                ];
                }
        );
    }
}
