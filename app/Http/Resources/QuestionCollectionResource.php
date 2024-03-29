<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class QuestionCollectionResource extends ResourceCollection
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
            function ($q) {
                return [
                    'content' => $q->content,
                    'lesson' => $q->lesson->title,
                    'user' => $q->user->profile->first_name . ' ' . $q->user->profile->last_name
                ];
                }
        );
    }
}
