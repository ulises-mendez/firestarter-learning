<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ChaptersCourseResource;
use App\Http\Resources\QuestionCollectionResource;
use App\Http\Resources\ReviewCollection;
use Auth;

class LessonCourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $user = Auth::user();
        return [
            'id' => $this->id,
            'chapters' => $this->chapters()
                            ->orderBy('order', 'asc')
                            ->get()
                            ->transform(
                            function($chapter) use ($user){
                                return [
                                    'title' => $chapter->title,
                                    'time' => $chapter->duration(),
                                    'lessons' => $chapter->lessons()->orderBy('order', 'asc')->get()
                                    ->transform(
                                    function($lesson) use ($user) {
                                        return [
                                            'id' => $lesson->id,
                                            'order' => $lesson->order,
                                            'title' => $lesson->title,
                                            'slug' => $lesson->slug,
                                            'video' => $lesson->video,
                                            'transcription' => $lesson->transcription,
                                            'premium' => $lesson->premium,
                                            'user_history' => $lesson->user_status($user->id)
                                        ];
                                    }),
                                    'lessons_count' => $chapter->lessons_count()
                                ];
                            }
                        ),
            'description' => $this->description,
            'likes' => $this->likes_count(),
            'like' => $this->user_like(),
            'saves' => $this->saves_count(),
            'save' => $this->user_save(),
            'skills' => $this->skills
                            ->transform(
                                function($skill){
                                    return [
                                        'id' => $skill->id,
                                        'title' => $skill->skill->title
                                    ];
                                }
                            ),
            'slug' => $this->slug,
            'title' => $this->title,
            'notes' => [$this->user_notes($user->id)
                            ->get()
                            ->groupBy('lesson_id')],

                            
        ];
    }
}
