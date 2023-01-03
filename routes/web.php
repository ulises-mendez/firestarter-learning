<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ActiveUserCourseController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\CourseController;
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
use App\Http\Controllers\SkillController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\QuestionController;
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

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 
        HomeController::class
    )
    ->name('welcome');

Route::get('search',[ 
    SearchController::class, 'search'
])
->name('search.get');

Route::post('search', 
    SearchController::class
)
->name('search');

    
// COURSES
Route::get('courses/admin', [
        CourseController::class, 'admin'])
    ->name('admin.courses');
Route::get('course/{slug}', [
        CourseController::class, 'show'
    ])
    ->name('course.show');
Route::get('course/{course_slug}/{lesson_slug}',
        [CourseController::class, 'show_lesson'
    ])
    ->name('course.lesson');
Route::get('courses/create', [
        CourseController::class, 'create'
    ])
    ->name('course.create');
Route::post('courses/create',[
        CourseController::class, 'store'
    ])
    ->name('course.store');

Route::get('courses/preview', function () {
    return Inertia::render('Courses/Preview');
})
->name('course.preview');

// ADMIN
Route::get('courses/edit/{id}',[
    CourseController::class, 'edit'
    ])
->name('course.edit');
Route::put('courses/update/{id}',[
    CourseController::class, 'update'
    ])
->name('course.update');

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


Route::get('settings', function () {
    return Inertia::render('Settings/Index');
})->name('settings');

Route::get('settings/billing-info', function () {
    return Inertia::render('Settings/Billing');
})->name('settings.billing');

Route::get('settings/premium-manage-account', function () {
    return Inertia::render('Settings/ManagePremium');
})->name('settings.manage_premium');



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
Route::get('plans/{plan}', [PlanController::class, 'show'])->name("plans.show");
Route::post('subscription', [PlanController::class, 'subscription'])->name("subscription.create");



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

Route::get('instructor', function () {
    return Inertia::render('Instructors/Show');
})
    ->name('instructor.show');


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

Route::get('chapter', function () {
    $chapter = \App\Models\Chapter::findOrFail(1);
    return response()->json([
        'chapter' => $chapter->duration()
    ]);
});

Route::get('subtitles',[CourseController::class, 'sub']);

require __DIR__.'/course.php';

require __DIR__.'/auth.php';
