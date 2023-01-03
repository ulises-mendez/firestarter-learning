<?php

namespace Database\Seeders;

use App\Models\Lesson;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 1,
            'order' => 1,
            'title' => 'Introduction',
            'slug' => Str::slug('Introduction'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => false
        ]);

        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 2,
            'order' => 1,
            'title' => 'We all have gender bias',
            'slug' => Str::slug('We all have gender bias'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 2,
            'order' => 2,
            'title' => 'You work like you played',
            'slug' => Str::slug('You work like you played'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 2,
            'order' => 3,
            'title' => 'Same words, different definitions',
            'slug' => Str::slug('Same words, different definitions'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 2,
            'order' => 4,
            'title' => 'Listening to diagnose vs. listening to problem solve',
            'slug' => Str::slug('Listening to diagnose vs. listening to problem solve'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 3,
            'order' => 1,
            'title' => 'Choosing roles that showcase your skills',
            'slug' => Str::slug('Choosing roles that showcase your skills'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 3,
            'order' => 2,
            'title' => 'Overcoming imposter syndrome',
            'slug' => Str::slug('Overcoming imposter syndrome'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 3,
            'order' => 3,
            'title' => 'Managing anger and stress',
            'slug' => Str::slug('Managing anger and stress'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 3,
            'order' => 4,
            'title' => 'Getting good feedback as a female leader',
            'slug' => Str::slug('Getting good feedback as a female leader'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 4,
            'order' => 1,
            'title' => 'Women and body language',
            'slug' => Str::slug('Women and body language'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 4,
            'order' => 2,
            'title' => 'Stop apologizing',
            'slug' => Str::slug('Stop apologizing'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 4,
            'order' => 3,
            'title' => 'The double bind: Being assertive and likable',
            'slug' => Str::slug('The double bind: Being assertive and likable'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 4,
            'order' => 4,
            'title' => 'Strengths women bring to negotiations',
            'slug' => Str::slug('Strengths women bring to negotiations'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 4,
            'order' => 5,
            'title' => 'Communicating with confidence',
            'slug' => Str::slug('Communicating with confidence'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 5,
            'order' => 1,
            'title' => 'Encouraging male allies',
            'slug' => Str::slug('Encouraging male allies'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 5,
            'order' => 2,
            'title' => 'How teams can leverage both masculine and feminine leadership',
            'slug' => Str::slug('How teams can leverage both masculine and feminine leadership'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 5,
            'order' => 3,
            'title' => 'The double bind: Being assertive and likable',
            'slug' => Str::slug('The double bind: Being assertive and likable'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 5,
            'order' => 4,
            'title' => 'Cross-gender mentoring and sponsorship',
            'slug' => Str::slug('Cross-gender mentoring and sponsorship'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 6,
            'order' => 1,
            'title' => 'Next steps',
            'slug' => Str::slug('Next steps'),
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => true
        ]);

    }
}
