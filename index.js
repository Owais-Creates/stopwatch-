let hour = 0;
let minute = 0;
let second = 0;
let milisecond = 0;

let timer = false;

function start() {
    timer = true;
    stopWatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false

    hour = 0;
    minute = 0;
    second = 0;
    milisecond = 0;

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
    document.getElementById("milisecond").innerHTML = milisecond;

}

function stopWatch() {
    if (timer == true) {
        milisecond = milisecond + 1;

        if (milisecond == 100) {
            second = second + 1;
            milisecond = 0;
        }

        if (second == 60) {
            minute = minute + 1;
            second = 0;
        }

        if (minute == 60) {
            hour = hour + 1;
            minute = 0;
            second = 0;
        }

        document.getElementById("hour").innerHTML = hour;
        document.getElementById("minute").innerHTML = minute;
        document.getElementById("second").innerHTML = second;
        document.getElementById("milisecond").innerHTML = milisecond;

        setTimeout("stopWatch()", 10)
    }
} 