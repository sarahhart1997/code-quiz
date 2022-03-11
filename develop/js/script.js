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

let shuffledQuestions, questionList

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

// showing the questions
function setNextQuestion() {
    resetAll()
        //shuffle questions/question list defined
        questionList = 0
        shuffledQuestions = questions.sort(() => Math.random() - 0.7)
    showQuestion(shuffledQuestions[questionList])
}

// sort through the questions and create buttons for them
function showQuestion(question) {
    questionContainerElement.innerText = question.question
    questionHeader.classList.remove('hide')
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer;
        button.classList.add('btn')
    // check if answer is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    // event listener which runs select answer function
        button.addEventListener('click', selectAnswer)
        questionContainerElement.appendChild(button)
    })
}

//insert answers from the string
function selectAnswer (question, correct) {
    if (question.answer === questions.correct) {
        // correct answer
        // add the class of correct so that all appropriate CSS runs
        element.classList.add('correct')
        // increase the score
        score++
        // Fun message
        createDiv.textContent = "Yay!! " + questions[questionIndex].correct;
    } else {
        // incorrect answer
        // add the class of wrong so that all appropriate CSS runs
        element.classList.add('wrong')
        // deduct time from the clock for incorrect answers
        secondsLeft = secondsLeft - penaltyTime;
        // fun message
        createDiv.textContent = "Oops! That's not quite it!"
    }
}

//delete existing html buttons
function resetAll() {
    nextButton.classList.add('hide')
    // if there is a child (js answerbuttons) remove it.
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
    // remove classes to reset CSS
    clearSetClass()
}

// clear set class for above function
function clearSetClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// determines if there are any remaining questions
if (questionIndex >= questions.length) {
    //show results function with user score
    showResults();
    createDiv.textContent = "You finished!" + " " + "You received " + score + "/" + "out of a possible" + questions.length;
} else {
    //go to the next question
    setNextQuestion();
}

//show results 
function showResults() {
    resultsPage.classList.remove('hide')
}

//submit the score

//questions
const questions = [
    {
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