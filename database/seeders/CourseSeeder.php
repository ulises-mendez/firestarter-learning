<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str as Str;

use App\Models\Chapter;
use App\Models\Course;
use App\Models\CourseSkill;
use App\Models\Lesson;

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
        $leadership = Course::create([
            'title' => $title,
            'slug' => 'undefined',
            'description' => 'Countless sources have documented the difficulties women face in reaching the top tiers of today\'s businesses. Women leaders face different expectations, norms, and realities—and are paid and promoted less. Creating an environment of "inclusive excellence," where both women and men can thrive, takes the right skills and strategy. This course is for anyone who wants to build a more equitable and collaborative culture at their organization, including women leaders and the men who work with them. Business professors, colleagues, and coaches Daisy L. Lovelace and Carolyn Goerner discuss the common challenges that women in leadership face—including gender bias, communication barriers, and imposter syndrome—and introduce strategies to overcome them. Plus, get tips for championing women\'s leadership and becoming a strong ally.',
            'level' => 'Intermediate',
            'category_id' => 1,
            'highlight' => 1,
            'status' => 1,
            'released' => now(),
            'thumbnail_id' => 1
        ]);
    
        CourseSkill::factory()->create([
            'course_id' => $leadership->id
        ]);

        $course = Course::factory(9)
        ->has(Chapter::factory()
        ->state(function(array $attributes, Course $course){
            return [
                'course_id' => $course->id,
                //'chapter_id' => $chapter->id
            ];
        })
            ->has(
                Lesson::factory()
                ->state(function(array $attributes, Chapter $chapter){
                    return [
                        'course_id' => $chapter->course_id,
                        'chapter_id' => $chapter->id
                    ];
                })
                )
        )
        ->create();
    }
}
