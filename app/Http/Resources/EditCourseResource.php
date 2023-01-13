<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EditCourseResource extends JsonResource
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
            'title' => $this->title,
            'category' => $this->category,
            'chapters' => $this->chapters()
                            ->orderBy('order', 'asc')
                            ->get()
                            ->transform(
                            function($chapter){
                                return [
                                    'id' => $chapter->id,
                                    'title' => $chapter->title,
                                    'lessons' => $chapter->lessons()->orderBy('order', 'asc')->get()
                                    ->transform(
                                        function($lesson){
                                        return [
                                            'chapter_id' => $lesson->chapter_id,
                                            'course_id' => $lesson->course_id,
                                            'id' => $lesson->id,
                                            'order' => $lesson->order,
                                            'premium' => $lesson->premium,
                                            'slug' => $lesson->slug,
                                            'title' => $lesson->title,
                                            'transcription' => $lesson->transcription,
                                            'video_id' => $lesson->video_id,
                                            'video' => $lesson->video,
                                        ];}
                                    ),
                                    'quiz' => $chapter->quiz ? [
                                        'id' => '1',
                                        'info' => $chapter->quiz,
                                        'questions' => $chapter->quiz->questions
                                        ->transform(
                                            function ($question)
                                            {
                                                return [
                                                    'id' => $question->id,
                                                    'text' => $question->text,
                                                    'options' => $question->options->transform(
                                                        function ($option)
                                                        {
                                                            return [
                                                                'id' => $option->id,
                                                                'message' => $option->message,
                                                                'text' => $option->text,
                                                                'value' => $option->value
                                                            ];
                                                        }
                                                    ),
                                                ];
                                            }
                                        )
                                    ]
                                    :
                                    null
                                ];
                            }
                        ),
            'description' => $this->description,
            'highlight' => $this->highlight,
            'level' => $this->level,
            'released' => $this->released,
            'skills' => $this->skills
                            ->transform(
                                function ($skill){
                                    return [
                                        'id' => $skill->skill->id,
                                        'title' => $skill->skill->title,
                                    ];
                                }
                            ),
            'slug' => $this->slug,
            'thumbnail' => $this->thumbnail,
            'status' => $this->status,
            'topics' => $this->topics
                                ->transform(
                                    function ($topic){
                                        return [
                                            'id' => $topic->topic->id,
                                            'title' => $topic->topic->title,
                                        ];
                                    }
                                ),
        ];
    }
}
