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
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);

        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 2,
            'order' => 1,
            'title' => 'We all have gender bias',
            'slug' => Str::slug('We all have gender bias'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 2,
            'order' => 2,
            'title' => 'You work like you played',
            'slug' => Str::slug('You work like you played'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 2,
            'order' => 3,
            'title' => 'Same words, different definitions',
            'slug' => Str::slug('Same words, different definitions'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 2,
            'order' => 4,
            'title' => 'Listening to diagnose vs. listening to problem solve',
            'slug' => Str::slug('Listening to diagnose vs. listening to problem solve'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 3,
            'order' => 1,
            'title' => 'Choosing roles that showcase your skills',
            'slug' => Str::slug('Choosing roles that showcase your skills'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 3,
            'order' => 2,
            'title' => 'Overcoming imposter syndrome',
            'slug' => Str::slug('Overcoming imposter syndrome'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 3,
            'order' => 3,
            'title' => 'Managing anger and stress',
            'slug' => Str::slug('Managing anger and stress'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 3,
            'order' => 4,
            'title' => 'Getting good feedback as a female leader',
            'slug' => Str::slug('Getting good feedback as a female leader'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 4,
            'order' => 1,
            'title' => 'Women and body language',
            'slug' => Str::slug('Women and body language'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 4,
            'order' => 2,
            'title' => 'Stop apologizing',
            'slug' => Str::slug('Stop apologizing'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 4,
            'order' => 3,
            'title' => 'The double bind: Being assertive and likable',
            'slug' => Str::slug('The double bind: Being assertive and likable'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 4,
            'order' => 4,
            'title' => 'Strengths women bring to negotiations',
            'slug' => Str::slug('Strengths women bring to negotiations'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 4,
            'order' => 5,
            'title' => 'Communicating with confidence',
            'slug' => Str::slug('Communicating with confidence'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 5,
            'order' => 1,
            'title' => 'Encouraging male allies',
            'slug' => Str::slug('Encouraging male allies'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 5,
            'order' => 2,
            'title' => 'How teams can leverage both masculine and feminine leadership',
            'slug' => Str::slug('How teams can leverage both masculine and feminine leadership'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 5,
            'order' => 3,
            'title' => 'The double bind: Being assertive and likable',
            'slug' => Str::slug('The double bind: Being assertive and likable'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 5,
            'order' => 4,
            'title' => 'Cross-gender mentoring and sponsorship',
            'slug' => Str::slug('Cross-gender mentoring and sponsorship'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);
        Lesson::factory()->create([
            'course_id' => 1,
            'chapter_id' => 6,
            'order' => 1,
            'title' => 'Next steps',
            'slug' => Str::slug('Next steps'),
            'video' => '/01_Women_lead_differently.mp4',
            'transcription_id' => 1,
            'premium' => false
        ]);

    }
}
