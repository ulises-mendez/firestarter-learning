<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class QuizCollection extends ResourceCollection
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
            function ($quiz) {
                return [
                 'id' => $quiz->id,
                 'chapter' => $quiz->chapter ? $quiz->chapter->title : $quiz->chapter,
                 'course' => $quiz->course->title,
                 'questions' => $quiz->questions->count()
                ];
            }
        );
    }
}
