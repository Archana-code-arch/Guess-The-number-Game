// random number between 1 to 20 referance form w3school: Math object method random
var random = parseInt(Math.random() * 20 + 1);
console.log(random);
let score = 20;

localStorage.setItem("highscore", "0");
// let input1 = parseInt(document.getElementById("inputNum").value);
var myVar = setInterval(function(){ myTimer() }, 1000);
var secondlimit = 20;

function myTimer() {
if(secondlimit == 0)
{
    myStopFunction();
}

document.getElementById("safeTimerDisplay").innerHTML = 'Time : 00:' + zeroPad(secondlimit,2);
secondlimit = secondlimit  - 1;

}
function myStopFunction() {
  
    clearInterval(myVar);
    document.getElementById("myBtn").disabled = true;
     // document.getElementById("timeover").innerHTML = "Time is over, let's start again...";
    }


function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}


function checkaInput() {

  let input = parseInt(document.getElementById("inputNum").value);
  console.log(input);

  if (random === input) {
   
    document.getElementsByClassName("random")[0].innerHTML = random;
    $("body").css("background-color", "#424957");
    score--;

    if(score == 0){
        document.getElementById("display").innerHTML = "game is Over....";
        document.getElementById("myBtn").disabled = true;
    }

    document.getElementById("score").innerHTML = score;
    document.getElementById("display").innerHTML = "Congratulation you Win !!!!!";
    document.getElementById("myBtn").disabled = true;
    
    let newhighScore = score;
    // let highall = score;
    // localStorage.setItem('highall')
    if (newhighScore > parseInt(localStorage.getItem("highscore"))) {
      localStorage.setItem("highscore", newhighScore);
 
      document.getElementById("highscore").innerHTML = localStorage.getItem("highscore");
    }
    var x = document.getElementById("myAudio");
    x.play();
    
  } else if (random > input) {
    document.getElementById("display").innerHTML = "To low";
    score--;
   
    if(score == 0){
        document.getElementById("display").innerHTML = "game is Over....";
        document.getElementById("myBtn").disabled = true;
    }
   
    document.getElementById("score").innerHTML = score;

  } else if (random < input) {
    document.getElementById("display").innerHTML = "To High";
    score--;
   
    if(score == 0){
        document.getElementById("display").innerHTML = "game is Over....";
        document.getElementById("myBtn").disabled = true;
    }
    document.getElementById("score").innerHTML = score;
  }
}


function restart() {
  location.reload();
  // let highall = highscore;
  // localStorage.setItem("highall", highall);
}

// function highalltime(){


// }
