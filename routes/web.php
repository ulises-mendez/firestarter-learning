<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ActiveUserCourseController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\CourseSaveController;
use App\Http\Controllers\CurriculumController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\HelpController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LearningHistoryController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\LessonPlayController;
use App\Http\Controllers\LikeCourseController;
use App\Http\Controllers\LikeReviewController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\QuizQuestionController;
use App\Http\Controllers\QuizQuestionOptionController;
use App\Http\Controllers\UserAvatarController;
use App\Http\Controllers\UserCareerGoalController;
use App\Http\Controllers\UserCollectionController;
use App\Http\Controllers\UserCompletedCourseController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserSkillController;
use App\Http\Controllers\WorkExperienceController;
use App\Models\Category;
use App\Models\CourseSave;
use App\Models\User;
use Owenoj\LaravelGetId3\GetId3;


use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the 'web' middleware group. Now create something great!
|
*/

Route::get('/', 
        HomeController::class
    )
    ->name('home');

Route::get('search',[ 
    SearchController::class, 'search'
])
->name('search.get');

Route::post('search', 
    SearchController::class
)
->name('search');

    


Route::post('courses/skills', [
        SkillController::class, 'store'
    ])
    ->name('skill.store');
// SECTION
Route::post('course/section' , [
        ChapterController::class, 'store'
    ])
    ->name('course.section');
Route::put('course/section/{chapter}', [
        ChapterController::class, 'update'
    ])
    ->name('chapter.update');
Route::delete('course/section/{chapter}', [
        ChapterController::class, 'destroy'
    ])
    ->name('chapter.delete');

// LESSON
Route::post('course/lesson', [
        LessonController::class, 'store'
    ])
    ->name('lesson.store');
Route::put('course/lesson/{lesson}', [
    LessonController::class, 'update'
])
->name('lesson.update');
Route::delete('course/lesson/{lesson}', [
    LessonController::class, 'destroy'
])
->name('lesson.delete');
Route::post('lesson', LessonPlayController::class)
    ->name('lesson.played');

// LIKE COURSES
Route::post('course/like',[
    LikeCourseController::class, 'store'
])
    ->name('course.like');
// COURSE SAVES
Route::post('course/save',[
    CourseSaveController::class, 'store'
])
    ->name('course.save');
Route::delete('course/save/{saved}', [
    CourseSaveController::class, 'destroy'
])
    ->name('course.save.delete');
// REVIEW
Route::post('course/reaction_review',
    LikeReviewController::class
)
    ->name('course.reaction_review');





Route::get('me/history', UserCompletedCourseController::class)->name('me.history');


Route::get('curriculum',
            [CurriculumController::class, 'create'])
    ->name('curriculum');
Route::post('curriculum',
        [UserAvatarController::class, 'store'])
    ->name('avatar');
Route::get('download', 
            [CurriculumController::class, 'download'])
    ->name('resume.download');



//PROFILE CV
Route::put('porofile/{profile}', 
            [ProfileController::class, 'update'])
    ->name('profile.update');


    // WorkExperience
Route::post('workexp', 
            [WorkExperienceController::class, 'store'])
    ->name('work.store');
Route::get('workexp', 
            [WorkExperienceController::class, 'works']
    )->name('user.works');
Route::put('workexp/{workExperience}', 
            [WorkExperienceController::class, 'update'])
    ->name('work.update');
Route::delete('workexp/{workExperience}', 
                [WorkExperienceController::class, 'destroy'])
    ->name('work.delete');



// USER EDUCATION
Route::get('edu',
            [EducationController::class, 'user'])
    ->name('profile.education');
Route::post('edu',
            [EducationController::class, 'store'])
    ->name('education.store');
Route::post('education',
        [EducationController::class, 'store'])
    ->name('education.store');
Route::put('education/{education}', 
            [EducationController::class, 'update'])
    ->name('education.update');
Route::delete('education/{education}', 
        [EducationController::class, 'destroy'])
->name('education.destroy');


// USER CAREER GOAL
Route::post('user_career', 
    UserCareerGoalController::class)
    ->name('user.career');
// USER SKILLS
Route::post('user-skill',
            [UserSkillController::class, 'store'])
    ->name('users_kill.store');
Route::put('user-skill/{userSkill}',
            [UserSkillController::class, 'update'])
    ->name('user_skill.update');
Route::delete('user-skill/{userSkill}',
            [UserSkillController::class, 'destroy'])
    ->name('user_skill.destroy');

/////
///
// PROFILE 

Route::get('me', [
    ActiveUserCourseController::class, 'index'
])->name('me');
Route::post('me', [
    ActiveUserCourseController::class, 'destroy'
])
    ->name('active.delete');

Route::get('me/saved', [
    CourseSaveController::class, 'user'
])->name('me.saved');


// USER COLLECTIONS
Route::get('me/collections', [
    UserCollectionController::class, 'user'
])->name('me.collections');
Route::get('me/collections/{userCollection}', [
    UserCollectionController::class, 'show'
])->name('me.collection');
Route::put('me/collections/{userCollection}', [
    UserCollectionController::class, 'update'
])->name('me.collection.update');
Route::delete('me/collections/{userCollection}', [
    UserCollectionController::class, 'destroy'
])->name('me.collection.delete');
Route::get('user-collection',[
    UserCollectionController::class, 'user'])
    ->name('user.collection');
Route::post('user-collection',[
        UserCollectionController::class, 'store'])
    ->name('collection.post');
Route::post('collection',[
        UserCollectionController::class, 'course'])
->name('course.collection');


Route::get('settings',
        SettingsController::class
    )->name('settings');

Route::get('settings/billing-info', [
    SettingsController::class, 'billing'
])->name('settings.billing');

Route::get('settings/premium-manage-account', function () {
    return Inertia::render('Settings/ManagePremium');
})->name('settings.manage_premium');

Route::get('settings/cancel-subscription', function () {
    return Inertia::render('Settings/CancelPremium');
})->name('settings.cancel_subscription');
Route::post('settings/cancel-subscription',[
    SubscriptionController::class, 'cancel'
])->name('settings.cancel_now');


// QUESTION
Route::post('user_quote', 
        [QuestionController::class, 'store'])
    ->name('quote.store');
Route::post('user_answer', 
        [QuestionController::class, 'answer'])
    ->name('quote.answer');
Route::post('quote_like',[
        QuestionController::class, 'like'])
    ->name('quote.like');
// NOTES
Route::post('note', [NoteController::class, 'store'])
    ->name('note.store');
Route::get('user_note/{course}',[NoteController::class,'course'])->name('notes');

// SUBS
Route::get('subscription', function () {
    return Inertia::render('Subscription/Products');
})->name('subscription');

Route::get('subscription/checkout', 
        [PlanController::class, 'index'])
->name('subscription.checkout');

// Help Center
Route::get('help', [
    HelpController::class, 'index'
])->name('help.index');

Route::get('help/topic/{id}', [
    HelpController::class, 'show'
])->name('help.topic');

Route::get('help/article', function () {
    return Inertia::render('HelpCenter/Article');
})->name('help.article');


// STRIPE
/*
Route::get('stripe',
        [PlanController::class, 'show'])
    ->name('stripe.index');
Route::post('stripe',
    [PlanController::class, 'subscription'])
    ->name('stripe.subscription');
*/
Route::get('plans', [PlanController::class, 'index']);
Route::get('plans/{plan}', [PlanController::class, 'show'])->name('plans.show');
Route::get('checkouts',[PlanController::class, 'checkout'])->name('checkouts');
Route::post('subscription', [SubscriptionController::class, 'subscription'])->name('subscription.create');


// TEAM
Route::get('team', [
        TeamController::class, 'index'
    ])
    ->name('admin.team');
Route::put('user/roles/{user}', [
    UserController::class, 'update'
    ])
->name('user.role.update');


// CATEGORIES

Route::get('categories', [
        CategoryController::class, 'index'
    ])
    ->name('admin.categories');
Route::post('categories', [
        CategoryController::class, 'store'
    ])
    ->name('category.store');
Route::get('category/{category}', [
        CategoryController::class, 'show'
    ])
    ->name('category');


// TOPICS

Route::get('topics/admin', [
    TopicController::class, 'admin'
])
    ->name('admin.topics');
Route::get('topics/admin/{topic}', [
    TopicController::class, 'edit'
])
    ->name('edit.topic');
Route::put('topics/admin/{topic}', [
        TopicController::class, 'update'
])
    ->name('topic.update');
Route::get('topic/{topic}', [
    TopicController::class, 'show'
])->name('topic');
Route::post('topic', [
        TopicController::class, 'store'
    ])
    ->name('topic.store');
Route::delete('topic/{topic}', [
        TopicController::class, 'destroy'
    ])
    ->name('topic.delete');


// MAIL
Route::get('/mails', function () {
    $invoice = [
        'name' => 'Ulises Eduardo',
    ];
    return new App\Mail\VerifyEmailCode($invoice);
});

// LEARNING HISTORY
Route::post('learning/add', [
    LearningHistoryController::class,'store'
])
  ->name('learning.store');


Route::get('billing-portal', function (Request $request) {
    return $request->user()->redirectToBillingPortal();
})
 ->name('billing.portal');


Route::get('completion', function(){
    $pdf = \PDF::loadView('pdf.completion', []);
    $pdf->set_paper('letter', 'landscape');

    return $pdf->stream('completion.pdf');
});

Route::get('resumenbill', function(){
    $user = Auth::user();
    $timestamp = $user->subscription('1')->asStripeSubscription()->current_period_end;
    return \Carbon\Carbon::createFromTimeStamp($timestamp)->toDayDateTimeString();
    //return dd($timestamp);
});
// QUIZZES

Route::get('quiz', [
    QuizController::class, 'create'
])
    ->name('quiz.create');

Route::get('quizzes', [
    QuizController::class, 'index'
])
    ->name('quizzes.admin');


Route::get('quiz/{quiz}', [
    QuizController::class, 'edit'
])
    ->name('quiz.edit');
Route::post('quiz/{quiz}', [
    QuizQuestionController::class, 'store'
])
    ->name('quiz.question.store');
Route::delete('quiz/{quiz}', [
    QuizController::class, 'destroy'
])
    ->name('quiz.delete');
Route::put('question-quiz/{quiz_question}',[
        QuizQuestionController::class, 'update'
])
    ->name('quiz.question.update');
Route::delete('question-quiz/{quiz_question}',[
    QuizQuestionController::class, 'destroy'
])
    ->name('quiz.question.delete');
Route::delete('quiz-question-option/{quiz_question_option}',
    QuizQuestionOptionController::class
)
->name('quiz.question.option.delete');

require __DIR__.'/course.php';

require __DIR__.'/auth.php';
