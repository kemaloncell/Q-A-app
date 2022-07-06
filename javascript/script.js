const quiz = new Quiz(questions);
const ui = new UI()

// Start Button
ui.btn_start.addEventListener("click", function (){
    if(quiz.questions.length !== quiz.questionIndex){
        ui.quiz_box.classList.add("active")
        ui.showQuestion(quiz.getQuestion());

    }else{
        console.log("Quiz Over")
    }

});

// Next Button
ui.btn_next.addEventListener("click", function (){
    if(quiz.questions.length !== quiz.questionIndex +1){
        ui.quiz_box.classList.add("active")
        quiz.questionIndex += 1;
        ui.showQuestion(quiz.getQuestion());
        ui.btn_next.classList.remove("show");

    }else{
        console.log("Quiz Over")
    }
})



function selectedOption(option){
    // option = <div class="option">....</div>
    let result = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if (question.checkAnswer(result)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon)
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon)
    }
    for(let i = 0; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");
}

