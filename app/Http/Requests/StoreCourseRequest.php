<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCourseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'slug' => 'nullable',
            'thumbnail' => 'required',
            'description' => 'required',
            'skills' => 'nullable',
            'highlight' => 'required',
            'level' => ' required',
            'category_id' => 'required',
            'attatchments' => 'nullable',
            'status' => 'nullable',
            'topics' => 'required|array',
        ];
    }
}
