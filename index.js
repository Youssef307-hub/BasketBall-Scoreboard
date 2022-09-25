let homeScore = 0, guestScore=0, homeFouls=0, guestFouls=0, quarterTime = 5, period = 1;


// functions to update the points for both home and guest
function addOnePointHome(){
    if(quarterTime != 0){
        homeScore += 1;
        document.getElementById("home-score").textContent = homeScore;
    }
    else{
        alert("Game Ended! You can't add points")
    }
}

function addTwoPointsHome(){
    if(quarterTime != 0){
        homeScore += 2;
        document.getElementById("home-score").textContent = homeScore;
    }
    else{
        alert("Game Ended! You can't add points")
    }
}

function addThreePointsHome(){
    if(quarterTime != 0){
        homeScore += 3;
        document.getElementById("home-score").textContent = homeScore;
    }
    else{
        alert("Game Ended! You can't add points")
    }
}

function addOnePointGuest(){
    if(quarterTime != 0){
        guestScore += 1;
        document.getElementById("guest-score").textContent = guestScore;
    }
    else{
        alert("Game Ended! You can't add points")
    }
}

function addTwoPointsGuest(){
    if(quarterTime != 0){
        guestScore += 2;
        document.getElementById("guest-score").textContent = guestScore;
    }
    else{
        alert("Game Ended! You can't add points")
    }
}

function addThreePointsGuest(){
    if(quarterTime != 0){
        guestScore += 3;
        document.getElementById("guest-score").textContent = guestScore;
    }
    else{
        alert("Game Ended! You can't add points")
    }
}


// functions to update the fouls count for both home and guest
function homeFoul(){
    if(quarterTime != 0){
        homeFouls += 1;
        document.getElementById("home-fouls").textContent = homeFouls;
    }
    else{
        alert("Game Ended! You can't add fouls")
    }
}

function guestFoul(){
    if(quarterTime != 0){
        guestFouls += 1;
        document.getElementById("guest-fouls").textContent = guestFouls;
    }
    else{
        alert("Game Ended! You can't add fouls")
    }
}


// functions to make a count down timer for quarter time 
function timer(myFunction){
    let minutes = Math.floor(quarterTime / 60), seconds = quarterTime % 60;
    
    if(seconds < 10)
        seconds = '0' + seconds;
    
    if(minutes < 10)
        minutes = '0' + minutes;

    document.getElementById("timer").textContent = minutes + ":" + seconds;
    document.getElementById("period").textContent = period;

    if (quarterTime > 0) {
        quarterTime = quarterTime - 1;
            
    } else {
        if(period < 4){
            period += 1;
            quarterTime = 5;
        }else{
            clearInterval(myFunction);
            document.getElementById("timer").textContent = "TIME!";
        }
    }
}


// setInterval to start the timer every quarter
let time = setInterval(function(){
    timer(time);
}, 1000);


// function to start a new game on button click and restart all the counters and the timer
function newGame(){
    homeScore = 0, guestScore=0, homeFouls=0, guestFouls=0, quarterTime = 5, period = 1;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;
    document.getElementById("home-fouls").textContent = homeFouls;
    document.getElementById("guest-fouls").textContent = guestFouls;
    clearInterval(time);
    let timeNew = setInterval(function(){
        timer(timeNew);
    }, 1000);
}
