<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str as Str;

use App\Models\Course;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $title = 'Leadership Strategies for Women';
        Course::factory()->create([
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => 'Countless sources have documented the difficulties women face in reaching the top tiers of today\'s businesses. Women leaders face different expectations, norms, and realities—and are paid and promoted less. Creating an environment of "inclusive excellence," where both women and men can thrive, takes the right skills and strategy. This course is for anyone who wants to build a more equitable and collaborative culture at their organization, including women leaders and the men who work with them. Business professors, colleagues, and coaches Daisy L. Lovelace and Carolyn Goerner discuss the common challenges that women in leadership face—including gender bias, communication barriers, and imposter syndrome—and introduce strategies to overcome them. Plus, get tips for championing women\'s leadership and becoming a strong ally.',
            'details' => json_encode(['content' => 'Countless sources have documented the difficulties women face in reaching the top tiers of today\'s businesses. Women leaders face different expectations, norms, and realities—and are paid and promoted less. Creating an environment of "inclusive excellence," where both women and men can thrive, takes the right skills and strategy. This course is for anyone who wants to build a more equitable and collaborative culture at their organization, including women leaders and the men who work with them. Business professors, colleagues, and coaches Daisy L. Lovelace and Carolyn Goerner discuss the common challenges that women in leadership face—including gender bias, communication barriers, and imposter syndrome—and introduce strategies to overcome them. Plus, get tips for championing women\'s leadership and becoming a strong ally.']),
            'liked' => 5283,
            'level' => 'Intermediate',
            'thumbnail' => '/img/thumbnails/leadership-strategies-for-women.jpeg',
            'category_id' => 1,
            'skills' => json_encode([
                'Women\'s Leadership'
            ])
        ]);

        Course::factory(1)->create();
    }
}
