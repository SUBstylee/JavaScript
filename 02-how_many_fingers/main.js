document.getElementById("button1").onclick = function(){
    var guess1 = document.getElementById("guess1").value;
    var fingers1 = Math.floor((Math.random()*5)+1);
    
    if(guess1 == fingers1 && fingers1 > 1){
        document.getElementById("message1").innerHTML = "Yes, " + guess1 + " fingers is right! I was holding up " + fingers1 + " behind my back." 
    } else if(guess1 == ""){
        document.getElementById("message1").innerHTML = "That is not a valid guess! I was holding up " + fingers1 + " behind my back." 
    } else if(guess1 == fingers1 && fingers1 == 1){
        document.getElementById("message").innerHTML = "Yes, " + guess1 + " finger is right! I was holding up " + fingers1 + " behind my back." 
    } else if(guess1 < 1){
        document.getElementById("message1").innerHTML = "No, " + guess1 + " is too few, I will hold up at least one finger! I was holding up " + fingers1 + " behind my back."
    } else if(guess1 > 5){
        document.getElementById("message1").innerHTML = "No, " + guess1 + " is too many, I only have five fingers on that hand! I was holding up " + fingers1 + " behind my back."
    } else if (guess1 < fingers1){
        document.getElementById("message1").innerHTML = "No, " + guess1 + " is too few! I was holding up " + fingers1 + " behind my back."
    } else{
        document.getElementById("message1").innerHTML = "No, " + guess1 + " is too many! I was holding up " + fingers1 + " behind my back."
    }
}

document.getElementById("button2").onclick = function(){
    var fingers2 = document.getElementById("guess2").value;
    console.log(fingers2);
    var comGuess;
    var numGuess = 0;
 
        while(comGuess != fingers2){
            comGuess = Math.floor(Math.random()*5+1);
            numGuess++
        }
        document.getElementById("message2").innerHTML = "Your number is " + comGuess + ". It took " + numGuess + " guesses to get it.";
}