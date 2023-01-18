<?php

namespace App\Http\Resources;

use Auth;
use Illuminate\Http\Resources\Json\JsonResource;


class CourseNotesResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $user = Auth::user();
        return [
            'count' => $this->user_notes_count($user->id),
            'chapters' => $this->chapters()
            ->orderBy('order', 'asc')
            ->get()
            ->transform(
            function($chapter) use ($user){
                return [
                    'title' => $chapter->title,
                    'id' => $chapter->id,
                    'notes' => $chapter->user_notes($user->id)
                                ->orderBy('lesson_id', 'asc')
                                ->orderBy('time', 'asc')
                                ->get()
                                ->transform(
                                    function($note){
                                        return [
                                            'id' => $note->id,
                                            'lesson' => $note->lesson,
                                            'content' => $note->content,
                                            'time' => $note->time
                                        ];
                                    }
                                )
                ];
            }
        )
        ];
    }
}
