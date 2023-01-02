<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'content' => $this->content,
            'lesson' => $this->lesson->title,
            'time' => $this->time,
            'likes' => $this->likes_count(),
            'user_like' => $this->user_like(),
            'user' => $this->user->name(),
            'replies' => $this->replies()->get()->transform(
                function($reply){
                    return [
                        'content' => $reply->content,
                        'created_at' => $reply->created_at,
                        'user' => $reply->user->name(),
                    ];
                }
            ),
            'replies_count' => $this->replies_count(),
            'slug' => $this->lesson->slug,
        ];
    }
}
