<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Profile;

use App\Models\User;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Profile::class;


    public function definition()
    {
        $cities = [
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Northwest Territories',
            'Nova Scotia',
            'Nunavut',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
            'Yukon'
        ];

        $colleges = [
            'Algonquin College',
            'Beta College',
            'Cambrian College',
            'Canadore College',
            'Centennial College',
            'Collège Boréal',
            'Conestoga College',
            'Confederation College',
            'Durham College',
            'The New College',
            'Toulon Vocational College',
            'Fanshawe College',
            'Fleming College',
            'George Brown College',
            'Georgian College',
            'Humber College',
            'La Cité collégiale',
            'Lambton College',
            'Loyalist College',
            'Mohawk College',
            'Niagara College',
            'Northern College',
            'St. Clair College',
            'St. Lawrence College',
            'Sault College',
            'Seneca College',
            'Sheridan College',
            'Springfield College Brampton',
        ];

        return [
            //'user_id' => fake()->numberBetween(2,10),
            'user_id' => function () {
                return User::factory()->create()->id;
            },
            'first_name' => fake()->name(),
            'last_name' => fake()->lastName(),
            'country' => 'Canada',
            'street' => fake()->streetAddress(),
            'city' => fake()->randomElement($cities),
            'postal_code' => fake()->postcode(),
            'level_education' => 'Bachelor Degree',
            'field' => fake()->jobTitle(),
            'school_name' => fake()->randomElement($cities),
            'school_country' => 'Canada',
            'school_city' => fake()->randomElement($cities),
            'topics' => json_encode([
                'business', 'Project Management', 'Management', 'Leadership'
            ])
        ];
    }
}
