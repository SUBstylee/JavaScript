const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "brown",
  "pink",
  "white",
  "gray",
  "black",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "brown",
  "pink",
  "white",
  "gray",
  "black",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);

    newDiv.classList.add('facedown');//will start facedown, order in css assures this

    newDiv.setAttribute('color', color);
  }
}

//start
let card1 = '';
let card2 = '';
let score = 0;
let bestScore;
let tracker = 0;
const scoreDisplay = document.querySelector('#currentScore');
const bestScoreDisplay = document.querySelector('#bestScore');
const newGame = document.querySelector('#newGame');
const reset = document.querySelector('#reset');

if (localStorage.getItem('bestScore')) {
  bestScore = parseInt(localStorage.getItem('bestScore'));
} else {
  bestScore = 1000;
  localStorage.setItem('bestScore', bestScore);
}//checks for highscore, if none in localstorage, then sets to 1000 in localstorage

bestScoreDisplay.innerText = bestScore;

newGame.addEventListener('click', function (e) {
  window.location.reload();
})//new game button reloads page
reset.addEventListener('click', function (e) {
  bestScore = 1000;
  localStorage.setItem('bestScore', bestScore);
  bestScoreDisplay.innerText = bestScore;
})//reset best score button changes back to 1000



// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  score++;
  scoreDisplay.innerText = score;

  if ((event.target.getAttribute('status') !== 'match') && (card2 === '')) {
    event.target.classList.toggle('facedown')


    if (!card1) {
      card1 = event.target;
    }
    else if (!card2) {
      card2 = event.target;
      if (card1.getAttribute('color') === card2.getAttribute('color') && (card1 !== card2)) {
        card1.classList.add('match');
        card2.classList.add('match');
        card1.setAttribute('status', 'match');
        card2.setAttribute('status', 'match');
        card1 = '';
        card2 = '';
        tracker++;
      }
      else if (card1.getAttribute('status') !== 'match') {
        setTimeout(function () {
          card1.classList.toggle('facedown');
          card2.classList.toggle('facedown');
          card1 = '';
          card2 = '';
        }, 1000)

      }
    }
    else {
      card1 = ''
      card2 = ''
    }
  }
  if (tracker === 10) {
    tracker = 0;
    if (score < bestScore) {
      bestScore = score;
      localStorage.setItem('bestScore', bestScore);
      bestScoreDisplay.innerText = bestScore;
    }
    setTimeout(function () {
      alert('You Win!');
    }, 500);
  }//alerts a win, updates bestscore if better than current, resets tracker
}

// when the DOM loads
createDivsForColors(shuffledColors);
