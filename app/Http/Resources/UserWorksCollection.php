<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserWorksCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\this  $this
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return $this->collection->map->only([
            'id',
            'title',
            'company_name',
            'country',
            'city',
            'from_month',
            'from_year',
            'to_month',
            'to_year',
            'to',
            'description'
        ]);
    }
}
