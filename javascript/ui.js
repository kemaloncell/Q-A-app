function UI(){
    this.btn_start = document.querySelector(".btn-start")
    this.btn_next = document.querySelector(".btn_next")
    this.btn_replay = document.querySelector(".btn_replay")
    this.btn_quit = document.querySelector(".btn_quit")
    this.quiz_box = document.querySelector(".quiz-box")
    this.score_box = document.querySelector(".score_box")
    this.option_list = document.querySelector(".option_list")
    this.correctIcon ='<div class="icon"><i class="fa-solid fa-check"></i></div>'
    this.incorrectIcon ='<div class="icon"><i class="fa-solid fa-circle-xmark"></i></div>'
    this.timer_second = document.querySelector(".timer_second")
    this.timer_text = document.querySelector(".timer_text")
    this.timer_line = document.querySelector(".timer_line")

}

UI.prototype.showQuestion = function(question){
    let questionText = `<span>${question.questionText}</span>`;
    let options ='';


    for(let answer in question.options){
        options += `<div class="option">
        <span><b>${answer}</b>: ${question.options[answer]}</span>
        </div>`;
    }

    document.querySelector(".question-text").innerHTML = questionText;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option")
    for(let opt of option){
        // set the 'this' of event listener for each option
        opt.setAttribute("onclick", "selectedOption(this)")
    }
    this.showQuestionCount(quiz.questionIndex + 1 , quiz.questions.length)
}

UI.prototype.showQuestionCount = function(questionIndex, questionSum){
    let tag = `  <span class="badge bg-warning">${questionIndex} / ${questionSum}</span>`
    document.querySelector(".question-count").innerHTML = tag;
    document.querySelector(".card-footer").classList.add("between");

}

UI.prototype.showScore = function(totalCount, correctCount){
    let tag = `<div class="score">
    <h3>You scored ${correctCount} / ${totalCount}</h3>
    </div>`
    document.querySelector(".score_text").innerHTML = tag;
}