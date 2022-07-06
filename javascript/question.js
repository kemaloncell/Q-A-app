// Question Class
function Question(questionText, options, trueAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.trueAnswer = trueAnswer;
}
//We've stored the function there using the prototype property of the Question object
// so that it doesn't repeat the function inside the Question Object every time.
Question.prototype.checkAnswer = function (answer) {
    return answer === this.trueAnswer;
}

let questions=[
    new Question("1-Which is javascript package management?",{a: "TypeScript", b: "Node.javascript", c: "Npm", d:"Nuget"}, "c"),
    new Question("2-Which is .net package management?",{a: "nuget", b: "Node.javascript", c: "npm"}, "a"),
    new Question("3-Which is javascript package management?",{a: "TypeScript", b: "Node.javascript", c: "npm"}, "c"),
    new Question("4-Which is javascript package management?",{a: "TypeScript", b: "Node.javascript", c: "npm"}, "c"),

]