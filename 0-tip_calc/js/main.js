function calcTip(){
    var price = document.getElementById("price").value;
    var quality = document.getElementById("quality").value;
    var people = document.getElementById("people").value;
//validation
    if(price === "" || quality == 0){
        return window.alert("Please enter some information!");
    }
//check number of people
    if(people === "" || people <= 1){
        document.getElementById("each").style.display = "none";
        var total = (price * quality)
    } else{
        document.getElementById("each").style.display = "block";
        var total = (price * quality) / people;
    }
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
//display tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Function for button click
document.getElementById("calculate").onclick = function(){calcTip();};