// declare items we are using
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')

let shuffledQuestions, questionList

startButton.addEventListener('click', startGame)

// hide start button
function startGame() {
    startButton.classList.add('hide')
    // shuffle questions/question list defined
    questionList = 0
    shuffledQuestions = questions.sort(() => Math.random() - 0.7)
    // reveal next question
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

// showing the questions
function setNextQuestion() {
    resetAll()
    showQuestion(shuffledQuestions[questionList])
}

// sort through the questions and create buttons for them
function showQuestion(question) {
    questionContainerElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
    // check if answer is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    // event listener which runs select answers function
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

//replace html answers with answers from the string

//delete existing html buttons
function resetAll() {
    nextButton.classList.add('hide')
    // if there is a child remove it.
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

// change class for if right or wrong
function setClass (element, correct) {
    clearSetClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

// clear set class
function clearSetClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//subtracts for incorrect answers

//keeps timer from counting in the negative

//submit the score

//questions
const questions = [
    {
        question:"Commonly used data types do NOT include:",
        answers:["strings", "booleans", "alerts", "numbers"],
        correct:"alerts"
    },
    {
        question:"The condition in an if/else statement is enclosed with ________",
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
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