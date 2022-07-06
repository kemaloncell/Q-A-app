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
    new Question("1-Which is javascript package management?",{a: "TypeScript", b: "Node.js", c: "Npm", d:"Nuget"}, "c"),
    new Question("2-Which is .net package management?",{a: "nuget", b: "Node.js", c: "npm"}, "a"),
    new Question("3-Which is javascript package management?",{a: "TypeScript", b: "Node.js", c: "npm"}, "c"),
    new Question("4-Which is javascript package management?",{a: "TypeScript", b: "Node.js", c: "npm"}, "c"),

]

// Quiz Class
function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

//Add getQuestion function on  Quiz prototype
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex]
}

const quiz = new Quiz(questions);

document.querySelector(".btn-start").addEventListener("click", function (){
    if(quiz.questions.length !== quiz.questionIndex){
        document.querySelector(".quiz-box").classList.add("active")
        showQuestion(quiz.getQuestion());

    }else{
        console.log("Quiz Over")
    }

});

document.querySelector(".btn_next").addEventListener("click", function (){
    if(quiz.questions.length !== quiz.questionIndex +1){
        document.querySelector(".quiz-box").classList.add("active")
        quiz.questionIndex += 1;
        showQuestion(quiz.getQuestion());
        nextButton.classList.remove("show");
    }else{
        console.log("Quiz Over")
    }
})

const option_list = document.querySelector(".option_list")
const correctIcon ='<div class="icon"><i class="fa-solid fa-check"></i></div>'
const nextButton = document.querySelector(".btn_next");

const incorrectIcon ='<div class="icon"><i class="fa-solid fa-circle-xmark"></i></div>'

function showQuestion(question){
    let questionText = `<span>${question.questionText}</span>`;
    let options ='';


    for(let answer in question.options){
        options += `<div class="option">
        <span><b>${answer}</b>: ${question.options[answer]}</span>
        </div>`;
    }

    document.querySelector(".question-text").innerHTML = questionText;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option")

    for(let opt of option){
        // set the 'this' of event listener for each option
       opt.setAttribute("onclick", "selectedOption(this)")
    }
}
function selectedOption(option){
    // option = <div class="option">....</div>
    let result = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if (question.checkAnswer(result)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon)
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon)
    }
    for(let i = 0; i < option_list.children.length; i++){
        console.log(option_list.children[i])
        option_list.children[i].classList.add("disabled");
    }
    nextButton.classList.add("show");
}
