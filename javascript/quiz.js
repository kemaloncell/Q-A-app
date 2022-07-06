// Quiz Class
function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

//Add getQuestion function on  Quiz prototype
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex]
}

