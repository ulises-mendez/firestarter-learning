<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserCollectionResource extends JsonResource
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
                    'description' => $this->description,
                    'id' => $this->id,
                    'title' => $this->title,
                    'courses' => $this->course_collections
                                ->transform(
                                    function($item){
                                        return[
                                            'category' => $item->course->category->title,
                                            'id' => $item->course->id,
                                            'slug' => $item->course->slug,
                                            'thumbnail' => $item->course->thumbnail->path,
                                            'title' => $item->course->title,
                                            'released' => $item->course->created_at,
                                            'time' => $item->course->time(),
                                            'played' => $item->course->user_played(),
                                        ];
                                        
                                    }
                                )
                ];
    }
}
