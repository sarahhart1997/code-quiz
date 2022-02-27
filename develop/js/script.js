// declare items we are using
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById

startButton.addEventListener('click', startGame)

// hide start button
function startGame() {
    startButton.classList.add('hide')
// shuffle questions

// reveal the next question
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

//reset questions, background, buttons

//questions
const questions = [
    {
        question:"Commonly used data types do NOT include:",
        choices:["strings", "booleans", "alerts", "numbers"],
        correct:"alerts"
    },
    {
        question:"The condition in an if/else statement is enclosed with ________",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
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

//loops through the questions

//subtracts for incorrect answers

//keeps timer from counting in the negative

//submit the score