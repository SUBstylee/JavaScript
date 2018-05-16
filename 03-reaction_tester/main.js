//Reaction tester

//functions
//start: begins timing when object appears
function start() {
    startTime = new Date();
    console.log(startTime);
};

//end: stops timing when object is clicked
function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    //add decimal point to the seconds
    timeDiff /= 1000;
    document.getElementById("disTime").innerHTML = timeDiff + " seconds";
}

//size: randomly determines the size of the object
function size(){
    var sizes = Math.floor(Math.random() *(225 - 100) + 100);
    document.getElementById("reflex").style.width = sizes + "px";
    document.getElementById("reflex").style.height = sizes + "px";
}

//reflexColor: randomly determines the color of the object
function reflexColor(){
    var r = Math.floor(Math.random() *(225 - 25) + 25);
    var g = Math.floor(Math.random() *(225 - 25) + 25);
    var b = Math.floor(Math.random() *(225 - 25) + 25);
    document.getElementById("reflex").style.background = "rgb("+ r + ", " + g + ", " + b +  ")";
}

//cirSquare: determines if object will be a circle or square
function cirSquare(){
    var cs = Math.floor(Math.random() *2);
    if(cs == 1){
        document.getElementById("reflex").style.borderRadius = "50%";
    }else{
        document.getElementById("reflex").style.borderRadius = "0%";
    }
}

//position: randomly determines where the object will appear
function position(){
    var top = Math.floor(Math.random() *600);
    var left = Math.floor(Math.random() *1500);
    console.log(top + " " + left);
    document.getElementById("reflex").style.top = top + "px";
    document.getElementById("reflex").style.left = left + "px";
}

//
//variables
var startTime, endTime;

//
//start timer on page load
start();

//
//running it all when object is clicked
document.getElementById("reflex").onclick = function(){
    //make shape disappear
    document.getElementById("reflex").style.display = "none";
    //run functions
    end();
    position();
    size();
    reflexColor();
    cirSquare();
    //Make shape reappear after 0.5 - 3 seconds
    setTimeout(function(){
        document.getElementById("reflex").style.display = "inline-block";
        start();
    }, (Math.floor(Math.random() * (3000 - 500 + 1)) + 500));    
    }