<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Topic>
 */
class TopicFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @ºreturn array<string, mixed>
     */
    public function definition()
    {
        return [
            'category_id' => fake()->numberBetween(1,5),
            'title' => fake()->word(),
            'description' => fake()->realText()
        ];
    }
}
