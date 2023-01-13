<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $quiz = \App\Models\Quiz::factory()->create(
            [
                'course_id' => 1,
                'chapter_id' => 2,
            ]
        );

        $q1 = \App\Models\QuizQuestion::factory()->create(
            [
                'quiz_id' => 1,
                'section_id' => null,
                'text' => 'Jada is providing Mateo with updates on a social media marketing strategy. In order to ensure that words have the same meanings, Jada should make sure she clarifies her _____.'
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 1,
                'text' => 'issues',
                'message' => 'Knowing women will most likely share problems when they want to discuss them rather than fixing them will enable you to avoid misunderstandings.',
                'value' => false
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 1,
                'text' => 'intentions',
                'message' => 'Clarifying your intentions would give you the best chance in making sure that your words have the same meanings.',
                'value' => true
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 1,
                'text' => 'questions',
                'message' => 'If you are the receiver of a message, ask clarifying questions if you are not sure which direction the conversation should take.',
                'value' => false
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 1,
                'text' => 'agreements',
                'message' => 'Knowing that women are more likely to look for areas of agreement in a conversation than gaps will enable you to avoid misunderstandings.',
                'value' => false
            ]
        );

        $q2 = \App\Models\QuizQuestion::factory()->create(
            [
                'quiz_id' => 1,
                'section_id' => null,
                'text' => 'Which leadership advantage do women have based on socialization in their early life?'
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 2,
                'text' => 'Strive for continuous improvement.',
                'message' => "Women leaders look for ways to grow and improve--not just to win or beat the competition",
                'value' => true
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 2,
                'text' => 'Get immunity from responsibility.',
                'message' => "Women's socialization transfers to personal responsibility for the team's performance.",
                'value' => false
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 2,
                'text' => 'Focus on the end result.',
                'message' => "Women are socialized to value cooperation, and they pay attention to the way that work gets done rather than only focusing on the end result.",
                'value' => false
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 2,
                'text' => 'Use conflict strategies.',
                'message' => "Women leaders use less team conflict, and have a stronger focus on the ethical considerations of the team's work.",
                'value' => false
            ]
        );

        $q3 = \App\Models\QuizQuestion::factory()->create(
            [
                'quiz_id' => 1,
                'section_id' => null,
                'text' => 'Ethan is looking at some resumes and notices that a candidate has a Harvard degree. Perfect, he is going hire this person. This is an example of _____.'
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 3,
                'text' => 'negativity bias',
                'message' => "This bias occurs when we irrationally weigh the potential for a negative outcome as more important than that of a positive outcome.",
                'value' => false
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 3,
                'text' => 'self-serving bias',
                'message' => "This bias does not reflect this situation. It involves success as our own doing whereas failures are someone else's fault.",
                'value' => false
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 3,
                'text' => 'confirmation bias',
                'message' => "This bias could add more distortion to the scenario, with the tendency to look for evidence that supports what Ethan already believes.",
                'value' => false
            ]
        );

        \App\Models\QuizQuestionOption::factory()->create(
            [
                'quiz_id' => 1,
                'quiz_question_id' => 3,
                'text' => 'unconscious bias',
                'message' => "In this case, the bias, also known as implicit associations, is a jump to judgment because the candidate is from Harvard.",
                'value' => true
            ]
        );
    }
}
