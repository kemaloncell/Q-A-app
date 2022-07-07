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
    new Question("1-Which is javascript package management?",{a: "typescript", b: "node.js", c: "npm", d:"nuget"}, "c"),
    new Question("2-Which is not considered in frontend scope?",{a: "css", b: "html", c: "javascript",d:"sql"}, "d"),
    new Question("3-Which is not considered in backend scope?",{a: "node.js", b: "typescript", c: "angular",d:"react"}, "a"),
    new Question("4-Which does not use the JavaScript programming language?",{a: "react", b: "angular", c: "vue.js",d: "asp.net"}, "d"),

]