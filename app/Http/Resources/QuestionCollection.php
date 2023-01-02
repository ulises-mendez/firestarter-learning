<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class QuestionCollection extends ResourceCollection
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
            function ($question) {
                return [
                    'id' => $question->id,
                    'created_at' => $question->created_at,
                    'content' => $question->content,
                    'lesson' => $question->lesson->title,
                    'time' => $question->time,
                    'likes' => $question->likes_count(),
                    'user_like' => $question->user_like(),
                    'user' => $question->user->name(),
                    'replies' => $question->replies()->get()->transform(
                        function($reply){
                            return [
                                'content' => $reply->content,
                                'created_at' => $reply->created_at,
                                'user' => $reply->user->name(),
                            ];
                        }
                    ),
                    'replies_count' => $question->replies_count(),
                    'slug' => $question->lesson->slug,
                ];
                }
        );
    }
}
