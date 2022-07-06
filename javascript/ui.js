function UI(){
    this.btn_start = document.querySelector(".btn-start")
    this.btn_next = document.querySelector(".btn_next")
    this.quiz_box = document.querySelector(".quiz-box")
    this.option_list = document.querySelector(".option_list")
    this.correctIcon ='<div class="icon"><i class="fa-solid fa-check"></i></div>'
    this.incorrectIcon ='<div class="icon"><i class="fa-solid fa-circle-xmark"></i></div>'
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