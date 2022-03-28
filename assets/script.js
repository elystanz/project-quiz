var startButton = document.getElementById("start-btn")
var questionContainer = document.getElementById("question-container")
var startTitle = document.getElementById("start-title")

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started");
    startButton.classList.add("hide");
    startTitle.classList.add("hide");
    questionContainer.classList.remove("hide");
    
}

// function setNextQuestion() {

// }

// function selectAnswer() {

// }


// have questions stored in an array
// use radio buttons to input numerical information 1-5
// have a "next" button once question is answered
// once all questions have been cycled through, have a "finish" button to provide results
// display results
// have input field for name that will allow results to be saved to local storage
// have a button to access a new page that lists results