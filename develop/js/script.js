// declare items we are using
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const quizRules = document.getElementById('quiz-rules')
const resultsPage = document.getElementById('result-box')
const continueButton = document.getElementById('continue')
const restartButton = document.getElementById('restart')
const questionHeader = document.getElementById('container-header')
const mainContainer = document.getElementById('main-container')
const quitButton = document.getElementById('quit')

//questions
const questions = [
    {
        question:"Commonly used data types do NOT include:",
        answers:["strings", "booleans", "alerts", "numbers"],
        correct:"alerts"
    },
    {
        question:"The condition in an if/else statement is enclosed with ________",
        answers:["quotes", "curly brackets", "parenthesis", "square brackets"],
        correct: "parenthesis"
    },
    {
        question:"Arrays in JavaScript can be used to store _____.", 
        answers:["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct:"all of the above"
    },
    {
        question:"String values must be enclosed within _____ when being assigned to variables.",
        answers:["commas", "curly brackets", "quotes", "parenthesis"],
        correct:"quotes"
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        answers:["JavaScript", "termial/bash", "for loops", "console.log"],
        correct:"console.log"
    }
];

// Seconds left at 20 seconds per question
var secondsLeft = 100;
// penaltyTime is 10 seconds
var penaltyTime = 10;

// Defining question list
// const questionList = questions.length;
// var setQuestion = questions[questionList].question;
// var setAnswers = questions[questionList].answers;

startButton.addEventListener('click', startGame)

// hide start button
function startGame() {
    startButton.classList.add('hide')
    mainContainer.classList.add('hide')
    // reveal rules page //
    quizRules.classList.remove('hide')
}

// exit button reloads page

//Continue past rules to first question
continueButton.addEventListener('click', firstQuestion)

function firstQuestion() {
    quizRules.classList.add('hide')
    mainContainer.classList.remove('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

// Starts the timer on the button, timer displays on screen.
// timer.addEventListener("click", ???? () {
// })

// showing the questions
function setNextQuestion() {
    // resetAll()
    for (let i=0; i < 5; i++) {
        questionList = 0
        shuffledQuestions = questions.sort(() => Math.random() - 0.7)
        showQuestion(shuffledQuestions[questionList])
        }
}

// sort through the questions and create buttons for them
function showQuestion(question) {
    questionContainerElement.innerText = question.question
    questionHeader.classList.remove('hide')
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer;
        button.setAttribute("id", "btn");
        // button.classList.add('btn')
    // check if answer is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    // event listener which changes style based on correct or wrong answer
        button.addEventListener('click', function(e) {
            var element = e.target;
            if (element.textContent === question.correct) {
            document.body.style.background = "#00852c";
            button.classList.add('correct');
            //createDiv.textContent = "That's right! Great work"
            } else {
            document.body.style.background = "#c70202";
            button.classList.add('wrong');
            secondsLeft = secondsLeft - penaltyTime;
            // createDiv.textContent = "Oops! That's not quite it!"
            }
        })
        questionContainerElement.appendChild(button)
    })
}

//insert answers from the string
function selectAnswer (event) {
   
}

//delete existing html buttons
// function resetAll() {
//     nextButton.classList.add('hide')
//     // if there is a child (js answerbuttons) remove it.
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild
//         (answerButtonsElement.firstChild)
//     }
//     // remove classes to reset CSS
//     clearSetClass()
// }

// // clear set class for above function
// function clearSetClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }

// determines if there are any remaining questions + time
if (questions.length <= 0, secondsLeft <= 0) {
    //show results function with user score
    showResults();
    //I have this text formatted in HTML, how do I dynamically 
    //set like here with that formatting??????
    createDiv.textContent = "You finished!" + " " + "You received " + score + "/" + "out of a possible" + questions.length;
} 
// If there are questions left in the string and time is greater than 0.
else if (secondsLeft > 0) {
    //go to the next question
    setNextQuestion();
}

//show results 
function showResults() {
    resultsPage.classList.remove('hide')
}

//submit the score
