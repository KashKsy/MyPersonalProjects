let wakeUpTime = 7;
let noon = 12;
let lunchTime = 12;
let naptime = lunchTime + 2;
let partyTime;
let evening = 18;

var showCurrentTime = function () {

    var clock = document.getElementById('clock');

    var currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    if (hours >= 12) {
        meridian = "PM";
    }
    if (hours > noon) {
        hours = hours - 12;
    }
    //set minutes
    if (minutes < 10) {
        minutes = "0" + minutes;

    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    clock.innerHTML = clockTime;
}


let updateTime = function () {

    let time = new Date().getHours();
    let messageText;
    let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    let timetEvent = document.getElementById('timeEvent');
    if (time == partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";

    }
    else if (time == wakeUpTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";

    }
    else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";

    }

    else if (time == naptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!";

    }
    else if (time >= evening) {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";

    }
    else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon!";
    }

    timeEvent.innerText = messageText;
    let lolcatImg = document.getElementById('lolcatImage');
    lolcatImg.src = image;
    showCurrentTime();
}
updateTime();

setInterval(updateTime, 1000);

let partyTimeButton = document.getElementById("partyTimeButton");
var partyEvent = function () {

    if (partyTime < 0) {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!"
        partyTimeButton.style.backgroundColor = "#0A8DAB"
    }
    else{
        partyTime= -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "black";
    }
}
partyTimeButton.addEventListener("click", partyEvent);


//wake up time selector function
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector")


let wakeUpEvent = function(){

    wakeUpTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//lunchtime selector function 
var lunchTimeSelector = document.getElementById("lunchTimeSelector");


let lunchTimeEvent = function() {

    lunchTime = lunchTimeSelector.value;

}

lunchTimeSelector.addEventListener("change" , lunchTimeEvent);

//nap time selector function 

let napTimeSelector = document.getElementById('napTimeSelector')

var napTimeEvent = function(){

    naptime = napTimeSelector.value;
}

napTimeSelector.addEventListener("change", napTimeEvent);