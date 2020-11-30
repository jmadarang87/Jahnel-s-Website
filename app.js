/* -------------------------- 
Sets Clock
 -------------------------- */

// const moment = require("./moment");

const clock = document.getElementById('time');

function pad(num) {
    if ( num < 10 ) {
        return `0${num}`;
    } 
    return num;
}

const setTime = function() {
    const timeNow = "";
    const time = new Date();
    let hh = pad(time.getHours());
    const mm = pad(time.getMinutes());
    const ss = pad(time.getSeconds());
    if (hh > 12) {
        hh = hh - 12;
        clock.textContent = `The Current Time is: ${hh}:${mm}:${ss}PM`;
    } else {
        clock.textContent = `The Current Time is: ${hh}:${mm}:${ss}AM`;
    }

}
setTime();

setInterval( setTime, 1000);

/* -------------------------- 
Sets Age
-------------------------- */ 


const myAge = document.getElementById('age');

const birthday = new Date(1987, 12, 3);
let today = new Date();
let age = ( today - birthday ) / 1000 / 60 / 60 / 24 / 365.25;
age = Math.floor(age);
myAge.textContent = `Age: ${age}`;


/* -------------------------- 
Sets Countdown to Birthday!
-------------------------- */ 

const countdownText = document.getElementById('countdown');

const birthdayCountdown = function () {
    let nextBirthday = new Date("Dec 3, 2020").getTime();
    const today = new Date();
    let countdown = nextBirthday - today;
    countdown = new Date(countdown);
    let days = Math.floor(countdown / 1000 / 60 / 60 /24);
    let hours = countdown.getHours();
    let minutes = countdown.getMinutes();
    let seconds = countdown.getSeconds();

    // const countdown = `${days} days til my birthday! ${hours} hours til my birthday! 
    //     ${minutes} minutes til my birthday! ${seconds} seconds til my birthday!`

    const message = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds til my birthday!! `;

    countdownText.textContent = `${message}`;

};

setInterval(birthdayCountdown, 1000);