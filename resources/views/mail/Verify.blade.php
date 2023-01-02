@component('mail::message')
# Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra finibus ex, ut ornare diam tristique at. Praesent finibus vestibulum odio in egestas. Mauris a ex faucibus, tincidunt sem id, vehicula velit. Fusce rhoncus placerat diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dui ipsum, faucibus sit amet orci in, faucibus luctus leo. Ut quis congue lectus. Etiam at purus vitae lacus tincidunt ultricies id non nibh. Morbi a erat et justo scelerisque congue. In euismod quam augue, sit amet vulputate tortor feugiat et. Ut vel mi fermentum lectus varius gravida vel sit amet nisl.

Suspendisse potenti. Sed tortor nulla, sodales vitae nisl et, porta molestie tortor. Donec elementum libero sit amet neque posuere, at molestie dolor hendrerit. Duis sit amet metus vitae tellus elementum dapibus sollicitudin in magna. Vestibulum sem turpis, porta ut lectus in, condimentum pharetra libero. Etiam ac quam nisl. Aenean a lacus vel risus ullamcorper malesuada. Donec fermentum arcu tellus, nec vestibulum nisi pretium vitae. Aliquam eu ipsum tempus, efficitur ex at, elementum ante. Mauris rhoncus iaculis vehicula.   
@component('mail::button', ['url' => ''])
Action Button
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent