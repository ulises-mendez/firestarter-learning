<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str as Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $titles = [
            'Developing Self-Awareness',
            'Develop a High-Performance Mindset',
            '43 Ideas for Starting a Side Business',
            'Improve your performance',
            'Leadership Mindsets',
            'Developing Your Emotional Intelligence',
            'Giving and Receiving Feedback',
            'How to Be a Good Mentee and Mentor',
            'The 10 Essentials of Influence and Persuasion',
            'Become a Marketing Entrepreneur',
            'Creating Behavioral Change that Lasts'
        ];
        $levels = [
            'All',
            'Begginer',
            'Intermediate',
            'Expert'
        ];

        $title = fake()->randomElement($titles);

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => fake()->realText(),
            'level' => fake()->randomElement($levels),
            'thumbnail_id' => '1',
            'category_id' => 1,
            'highlight' => fake()->randomNumber(0,1),
        ];
    }
}
