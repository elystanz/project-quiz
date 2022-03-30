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


var fetchButton = document.createElement("button")
fetchButton.classList.add("hide")
var questions = [['How likely are your parents able to become pigs'],
['How likely are you to become old and travel with a prince to get your beauty back'],
['How likely are you able to befriend a mermaid princess'],
['How likely are you able to play with spirits in your home'],
['How confident were you in getting these references']]

var score = 0
var questionNo = 1

startButton.addEventListener("click", setUp)
nextButton.addEventListener("click", setNextQuestion)
answerOne.addEventListener("click", addOnepoint)
answerTwo.addEventListener("click", addTwopoint)
answerThree.addEventListener("click", addThreepoint)
answerFour.addEventListener("click", addFourpoint)
answerFive.addEventListener("click", addFivepoint)

fetchButton.className = "button text-white";
fetchButton.textContent = "Results!";
fetchButton.style.justifyContent = "center";
fetchButton.style.margin = "45px";

function startGame() {
    console.log("Started");
    startButton.classList.add("hide");
    startTitle.classList.add("hide");
    questionContainer.classList.remove("hide");
    
}
//function fetchButton(){
   // var fetchButton = document.createElement("button")
//}
function setUp(){
    startButton.classList.add("hide");
    startTitle.classList.add("hide");
    questionContainer.classList.remove("hide");
    // nextButton.classList.remove("hide");
    if (questions.length != 0){
        document.getElementById("question").innerHTML = questions[0][0];
    } else {
        var finalQuestion = document.getElementById("question")

        finalQuestion.innerHTML = "Get your character and their dog!";

        document.getElementById("answer-button").remove();
        leastMost.classList.add("hide");
        fetchButton.classList.remove("hide");
        document.getElementById("question").append(fetchButton)
}
    }


 function setNextQuestion() {
    questions.shift();
    setUp();
}

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



fetchButton.addEventListener("click", function() {
fetch("https://ghibliapi.herokuapp.com/people?random")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log('names');
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i].url);
      console.log(data[i].name); 
      
    }
  })
})


// https://cataas.com/cat/cat
// 
// https://api.thecatapi.com/v1/images/search?limit=1&size=full

// function getApi() {

//     // startTitle.classList.remove("hide");
//     nextButton.classList.add('hide');
//     var requestUrl = 'https://dog.ceo/api/breeds/image/random';
//     console.log(requestUrl);

//     fetch(requestUrl)
//       .then(function(response) {
//         return response.url;
//       })
//       .then(function(data) {
//         for (var i = 0; i < score; i++) {
//           var listItem = document.createElement('img');
//           ('img').src = requestUrl;
//           listItem.innerHTML = data[i].url;
//           startTitle.appendChild(listItem)
//           nextButton.classList.add('hide');
//           leastMost.classList.add('hide');
//         }
//       });
    
//   }

  // fetchButton.addEventListener('click', getApi);







// var startButton = document.getElementById("start-btn")
// var questionContainer = document.getElementById("question-container")
// var startTitle = document.getElementById("start-title")
// var nextButton = document.getElementById("next-btn")

// startButton.addEventListener("click", startGame)

// function startGame() {
//     console.log("Started");
//     startButton.classList.add("hide");
//     startTitle.classList.add("hide");
//     questionContainer.classList.remove("hide");
//     nextButton.classList.remove("hide");
    
// }


// // function setNextQuestion() {

// // }

// // function selectAnswer() {

// // }


// have questions stored in an array
// use radio buttons to input numerical information 1-5
// have a "next" button once question is answered
// once all questions have been cycled through, have a "finish" button to provide results
// display results
// have input field for name that will allow results to be saved to local storage
// have a button to access a new page that lists result