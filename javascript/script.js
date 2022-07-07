const quiz = new Quiz(questions);
const ui = new UI()

ui.btn_start.addEventListener("click", function (){
        ui.quiz_box.classList.add("active")
        startTimer(3);
        ui.showQuestion(quiz.getQuestion());
});

ui.btn_next.addEventListener("click", function (){
    if(quiz.questions.length !== quiz.questionIndex +1){
        ui.quiz_box.classList.add("active")
        clearInterval(counter);
        startTimer(3);
        quiz.questionIndex += 1;
        ui.showQuestion(quiz.getQuestion());
        ui.btn_next.classList.remove("show");

    }else{
        clearInterval(counter)
        ui.quiz_box.classList.remove("active")
        ui.score_box.classList.add("active")
        ui.showScore(quiz.questions.length, quiz.trueAnswer)
    }
})

ui.btn_quit.addEventListener("click", function (){
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function (){
    quiz.questionIndex = 0;
    quiz.trueAnswer = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active")
});



function selectedOption(option){
    // option = <div class="option">....</div>
    clearInterval(counter);
    let result = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if (question.checkAnswer(result)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon)
        quiz.trueAnswer += 1;
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon)
    }
    for(let i = 0; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");
}

let counter;
function startTimer(time){
    // each second, call the timer function
   counter = setInterval(timer, 1000);

    function timer(){
      ui.timer_second.textContent = time;
      time--;
      if(time < 0){
          clearInterval(counter);

          ui.timer_text.textContent = "Time's up!";

          let answer = quiz.getQuestion().trueAnswer

          for(let option of ui.option_list.children){
             if(option.querySelector("span b").textContent === answer ){
                 option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon)
             }

             option.classList.add("disabled");
          }
          ui.btn_next.classList.add("show");
      }
    }
}