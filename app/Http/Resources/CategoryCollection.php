<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CategoryCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        return $this->collection->map(
            function ($category) {
                return [
                    'id' => $category->id,
                    'title' => $category->title,
                    'topics' => $category->topics,
                    'created_at' => $category->created_at,
                    'updated_at' => $category->updated_at,
                ];
                }
        );
    }
}
