/*let question = {
    questionText: "Which is javascript package management?",
    options: {
        a: "TypeScript",
        b: "Node.js",
        c: "npm",
    },
    trueAnswer: "c",
    checkAnswer: function (answer) {
      return answer === this.trueAnswer;
    }
} */

function Question(questionText, options, trueAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.trueAnswer = trueAnswer;
    console.log(this)
}
//We've stored the function there using the prototype property of the Question object
// so that it doesn't repeat the function inside the Question Object every time.
Question.prototype.checkAnswer = function (answer) {
    return answer === this.trueAnswer;
}
let question1 = new Question("Which is javascript package management?",{a: "TypeScript", b: "Node.js", c: "npm"}, "c");
let question2 = new Question("Which is .net package management?",{a: "nuget", b: "Node.js", c: "npm"}, "a");

let questions=[
    new Question("Which is javascript package management?",{a: "TypeScript", b: "Node.js", c: "npm"}, "c"),
    new Question("Which is .net package management?",{a: "nuget", b: "Node.js", c: "npm"}, "a"),
    new Question("Which is javascript package management?",{a: "TypeScript", b: "Node.js", c: "npm"}, "c"),
    new Question("Which is javascript package management?",{a: "TypeScript", b: "Node.js", c: "npm"}, "c"),

]
