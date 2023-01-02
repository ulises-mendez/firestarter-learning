<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEducationRequest extends FormRequest
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
            'level' => 'required',
            'field' => 'required',
            'college' => 'required',
            'city' => 'required',
            'from_month' => 'required',
            'from_year' => 'required',
            'to_month' => 'required:unless,currently,true',
            'to_year' => 'required:unless,currently,true',
            'currently' => 'required'
        ];
    }
}
