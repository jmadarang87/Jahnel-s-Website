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

setInterval( setTime, 1000);