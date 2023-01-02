<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateWorkExperienceRequest extends FormRequest
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
            'title' =>'required',
            'company' => 'required',
            'country' => 'required',
            'city' => 'required',
            'from_month' => 'required',
            'from_year' => 'required',
            'currently' => 'required',
            'to_month' => 'required_unless:currently,true',
            'to_year' => 'required_unless:currently,true',
            'description' => 'required',
        ];
    }
}
