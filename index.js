let homeScore = 0, guestScore=0, homeFouls=0, guestFouls=0, quarterTime = 5, period = 1;


// functions to update the points for both home and guest
function addOnePointHome(){
    homeScore += 1;
    document.getElementById("home-score").textContent = homeScore;
}

function addTwoPointsHome(){
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore;
}

function addThreePointsHome(){
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore;
}

function addOnePointGuest(){
    guestScore += 1;
    document.getElementById("guest-score").textContent = guestScore;
}

function addTwoPointsGuest(){
    guestScore += 2;
    document.getElementById("guest-score").textContent = guestScore;
}

function addThreePointsGuest(){
    guestScore += 3;
    document.getElementById("guest-score").textContent = guestScore;
}


// functions to update the fouls count for both home and guest
function homeFoul(){
    homeFouls += 1;
    document.getElementById("home-fouls").textContent = homeFouls;
}

function guestFoul(){
    guestFouls += 1;
    document.getElementById("guest-fouls").textContent = guestFouls;
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
            quarterTime = 5;
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
