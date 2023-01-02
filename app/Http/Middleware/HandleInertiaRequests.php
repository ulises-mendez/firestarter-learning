<?php

namespace App\Http\Middleware;

use Auth;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => function () use ($request) {
                return [
                    'success' => $request->session()->get('success'),
                    'error' => $request->session()->get('error'),
                ];
            },
            'menu' => Auth::check() ? function () use ($request) {
                $user = $request->user();
                switch(true){
                    case $user->hasRole('admin'):
                        return [
                                [
                                    'text' => 'Team',
                                    'link' => 'admin.team',
                                    'icon' => 'team',
                                ],
                                [
                                    'text' => 'Courses',
                                    'link' => 'admin.courses',
                                    'icon' => 'courses',
                                ],
                                [
                                    'text' => 'Categories',
                                    'link' => 'admin.categories',
                                    'icon' => 'categories',
                                ]
                        ];
                        break;
                    case $user->hasRole('editor'):
                        return [
                            [
                                'text' => 'Team',
                                'link' => 'admin.team',
                                'icon' => 'team',
                            ],
                            [
                                'text' => 'Courses',
                                'link' => 'admin.courses',
                                'icon' => 'courses',
                            ],
                            [
                                'text' => 'Categories',
                                'link' => 'admin.categories',
                                'icon' => 'categories',
                            ]
                        ];
                        break;
                    case $user->hasRole('instructor'):
                        return 'instructor';
                        break;
                    case $user->hasRole('student'):
                        return [
                                [
                                    'text' => 'Dashboard',
                                    'link' => 'dashboard',
                                    'icon' => 'home',
                                ],
                                [
                                    'text' => 'Courses',
                                    'link' => 'courses',
                                    'icon' => 'courses',
                                ],
                                [
                                    'text' => 'Me',
                                    'link' => 'me',
                                    'icon' => 'user',
                                ],
                                [
                                    'text' => 'Resume',
                                    'link' => 'curriculum',
                                    'icon' => 'cv',
                                ],
                                [
                                    'text' => 'Settings',
                                    'link' => 'settings',
                                    'icon' => 'settings',
                                ]
                        ];
                        break;
                }
            } : [],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
