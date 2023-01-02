<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\WorkExperience>
 */
class WorkExperienceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'tile' => fake()->jobTitle(),
            'company_name' => fake()->company(),
            'country' => fake()->country(),
            'city' => fake()->city(),
            'from' => fake()->date(),
            'currently' => fake()->boolean(),
            'to' => fake()->date(),
            'description' => fake()->text(),
        ];
    }
}
