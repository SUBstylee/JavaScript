//variables

var numSquares = 6
var colors = [];
var pickedColor;

//doc selectors

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

//button selectors

var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

resetBtn.addEventListener("click", function(){
    newGame()
});

//functions

function init(){
//mode button event listeners
    setupModeButtons();
    
    setupSquares();
    
    newGame();
}

function setupModeButtons(){
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            newGame();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){    
        //adds click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again?";
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change esch color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genRanColors(n){
    //make an array
    var arr = [];
    //add n random colors to array (repeat)
    for(var i = 0; i < n; i++){
        //get random color and push into array
        arr.push(ranColor());
    }
    //return array to colors variable
    return arr;
}

function ranColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random() *256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() *256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() *256);
    //pass into a string
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function newGame(){
    //generate new colors
    colors = genRanColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
           squares[i].style.display = "none";
           }
    }
}