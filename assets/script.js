// declare all global variables
var startButton = document.getElementById("start-btn")
var questionContainer = document.getElementById("question-container")
var startTitle = document.getElementById("start-title")
var nextButton = document.getElementById("next-btn")
var answerOne = document.getElementById("onePoint")
var answerTwo = document.getElementById("twoPoint")
var answerThree = document.getElementById("threePoint")
var answerFour = document.getElementById("fourPoint")
var answerFive = document.getElementById("fivePoint")
var leastMost = document.getElementById("scale")
var finalQuestion = document.getElementById("question")

// hide the save results button
var saveResults = document.getElementById("save")
saveResults.classList.add("hide");

// create fetch button, hide it, and style the button
var fetchButton = document.createElement("button")
fetchButton.classList.add("hide")

fetchButton.className = "button";
fetchButton.textContent = "Results!";
fetchButton.style.justifyContent = "center";
fetchButton.style.margin = "45px";

// contain questions within a string
var questions = [['How likely are your parents able to become pigs?'],
['Travel with a prince to get your beauty back after turning old?'],
['How likely are you to befriend a mermaid princess?'],
['How likely are you to play with spirits in your home?'],
['How likely are you to wait in the rain for a bus?']]

var score = 0
var questionNo = 1

// add eventListeners to radio buttons
startButton.addEventListener("click", setUp)
nextButton.addEventListener("click", setNextQuestion)
answerOne.addEventListener("click", addOnepoint)
answerTwo.addEventListener("click", addTwopoint)
answerThree.addEventListener("click", addThreepoint)
answerFour.addEventListener("click", addFourpoint)
answerFive.addEventListener("click", addFivepoint)


// start game function
function startGame() {
    console.log("Started");
    startButton.classList.add("hide");
    startTitle.classList.add("hide");
    questionContainer.classList.remove("hide");
    
}

// loop through question array until finished, then present the results
function setUp(){
    startButton.classList.add("hide");
    startTitle.classList.add("hide");
    questionContainer.classList.remove("hide");
    if (questions.length != 0){
        document.getElementById("question").innerHTML = questions[0][0];
        event.preventDefault();
    } else {
        finalQuestion.innerHTML = "Get your character and their dog!";

        document.getElementById("answer-button").remove();
        leastMost.classList.add("hide");
        fetchButton.classList.remove("hide");
        document.getElementById("question").append(fetchButton)
      }
    }

// allows loop to restart at beginning of setUp function, until array is exhausted
 function setNextQuestion() {
    questions.shift();
    setUp();
}

// begin point add system
function addOnepoint(){
    score = score + 1
    setNextQuestion()
}

function addTwopoint(){
    score = score + 2
    setNextQuestion()
}

function addThreepoint(){
    score = score + 3
    setNextQuestion()
}

function addFourpoint(){
    score = score + 4
    setNextQuestion()
}

function addFivepoint(){
    score = score + 5
    setNextQuestion()
}

// declare dog image variable and fetch image data from the API
var image = document.getElementById("image")
fetchButton.addEventListener("click", function() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
      console.log(result)
      image.src = result.message
    })
    .catch(err=>console.log(err))
})

// declare name variable and fetch name data from the API
var ghibliName = document.getElementById("names")
fetchButton.addEventListener("click", function() {
fetch("https://ghibliapi.herokuapp.com/people")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var randomNum = Math.floor(Math.random() * score)
    ghibliName = data[randomNum].name;
    console.log(ghibliName);
    document.getElementById("names").textContent = ghibliName;
  })
})

ghibliName.className = "ghibli";

// begin result save submission to localStorage
fetchButton.addEventListener("click", function() {
  fetchButton.classList.add("hide");
  saveResults.classList.remove("hide");
  finalQuestion.textContent = "Save Your Results!";
  document.getElementById("question").append(saveResults);
})

function saveData(){
  var save_button = document.getElementById("name-save").value
  var save_Button = JSON.stringify(save_button)
  localStorage.setItem("data",save_Button)
  event.preventDefault();
}

function getData(){
    if (localStorage.getItem('data') == null){
        localStorage.setItem('data', '');}
    var saver = JSON.parse(localStorage.getItem('data'))
    // console.log(saver)
    document.getElementById('name-save').innerHTML= saver
}


// ALTERNATIVE APIs
// https://cataas.com/cat/cat
// https://api.thecatapi.com/v1/images/search?limit=1&size=full