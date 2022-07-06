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
    this.checkAnswer = function (answer) {
        return answer === this.trueAnswer;
    }
}

let question1 = new Question("Which is javascript package management?",{a: "TypeScript", b: "Node.js", c: "npm"}, "c");
let question2 = new Question("Which is .net package management?",{a: "nuget", b: "Node.js", c: "npm"}, "a");

let questions=[
    new Question("Which is javascript package management?",{a: "TypeScript", b: "Node.js", c: "npm"}, "c"),
    new Question("Which is .net package management?",{a: "nuget", b: "Node.js", c: "npm"}, "a"),
    new Question("Which is javascript package management?",{a: "TypeScript", b: "Node.js", c: "npm"}, "c"),
    new Question("Which is javascript package management?",{a: "TypeScript", b: "Node.js", c: "npm"}, "c"),

]

for(let s in questions) {
    console.log(questions[s].questionText);
    console.log(questions[s].trueAnswer);
    console.log(questions[s].checkAnswer("c"));
}


console.log(question1.questionText);
console.log(question1.trueAnswer);
console.log(question1.checkAnswer("c"));

