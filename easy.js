/*EASY: Write a function that would allow you to do this:

var run = exercise('running');

console.log(run()); // prints "Today's exercise: running"

var swim = exercise('swimming');

console.log(swim()); // prints "Today's exercise: swimming"*/

function action(exercise){
    return function(){
        return "Today's exercise:" + exercise;
    }
}
var run = action('running');
var swim = action('swimming');
console.log(run());
console.log(swim());