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





/*VERY HARD: Object prototype chain and prototypal inheritance exercise.

Create a Person constructor that has three properties: name, job, and age.
Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.

function Person(name, job, age) { }

function Programmer(name, job, age, languages) { }*/

class Person {
  constructor(name, job, age, languages = []) {
      this.name = name;
      this.job = job;
      this.age = age;
      this.languages = languages;
      this.busy = true;
  }
  fetchJob = function() {
      console.log(`${this.name} is a ${this.job}`);
  }
  exercise = function() {
      console.log(`${this.name} thinks cycling is fun`);
  }
  exrcise = function() {
    console.log(`${this.name} thinks cycling is fun`);
  }
  // Step 5.
  completeTask(){
    this.busy = false;
}
acceptNewTask(){
    this.busy = true;
}
//Step 6.
offerNewTask(){
  if (this.busy) {
      console.log(`I can't accept new tasks right now.`);
  } else{
      console.log(`I would love to take on a new task.`)
  }
}
// STEP 7.
learnLanguage(language) {
  this.languages.push(language);
}

listLanguages() {
  console.log(this.languages);
}
}
let programmer1 = new Person ('Chris', 'dancer', 23, ['HTML', 'CSS'] )
programmer1.exrcise ();
programmer1.exercise();
programmer1.fetchJob();
programmer1.acceptNewTask(); // BUSY
programmer1.offerNewTask();
programmer1.completeTask(); // NOT BUSY
programmer1.offerNewTask();
programmer1.listLanguages(); // --> [ ‘HTML’, ‘CSS’, ‘JavaScript’ ]
programmer1.learnLanguage("React"); // JUST LEARNED NEW LANG
programmer1.listLanguages();
