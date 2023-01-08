<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Chapter;
use App\Models\Profile;
use App\Models\User;
use App\Models\UserTopic;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleSeeder::class);

        // \App\Models\User::factory(1)->create();
        //
        $admin = User::factory()->create([
            'email' => 'admin@firestarter.com',
            'password' => bcrypt('firetesting'),
            'remember_token' => Str::random(10),
        ])->assignRole('admin');

        Profile::factory()->create([
            'user_id' => $admin->id,
            'first_name' => $admin->first_name,
            'last_name' => $admin->last_name
        ]);

        $editor=User::factory()->create([
            'email' => 'editor@firestarter.com',
            'password' => bcrypt('firetesting'),
            'remember_token' => Str::random(10),
        ])->assignRole('editor');

        Profile::factory()->create([
            'user_id' => $editor->id,
            'first_name' => $editor->first_name,
            'last_name' => $editor->last_name
        ]);

        $instructor = User::factory()->create([
            'email' => 'instructor@firestarter.com',
            'password' => bcrypt('firetesting'),
            'remember_token' => Str::random(10),
        ])->assignRole('instructor');

        Profile::factory()->create([
            'user_id' => $instructor->id,
            'first_name' => $instructor->first_name,
            'last_name' => $instructor->last_name
        ]);
        
        $student = User::factory()->create([
            'email' => 'student@firestarter.com',
            'password' => bcrypt('firetesting'),
            'remember_token' => Str::random(10),
        ])->assignRole('student');

        Profile::factory()->create([
            'user_id' => $student->id,
            'first_name' => $student->first_name,
            'last_name' => $student->last_name
        ]);

        UserTopic::factory(5)->create([
            'user_id' => $student->id,
        ]);
        
        $this->call(CategorySeeder::class);
        $this->call(ChapterSeeder::class);
        $this->call(CourseSeeder::class);
        $this->call(LessonSeeder::class);
        $this->call(ProfileSeeder::class);
        $this->call(ReviewSeeder::class);
        $this->call(PlanSeeder::class);
        $this->call(QuestionSeeder::class);
        $this->call(SkillSeeder::class);
        $this->call(ThumbnailSeeder::class);
        $this->call(TopicSeeder::class);
        $this->call(TranscriptionSeeder::class);
        $this->call(VideoLessonSeeder::class);
    }
}
