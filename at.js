let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

function start() {
    interval = setInterval(() => {
        milliseconds++;
        if (milliseconds === 100) {
            seconds++;
            milliseconds = 0;
        }
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }

        document.getElementById('hours').innerHTML = formatTime(hours);
        document.getElementById('minutes').innerHTML = formatTime(minutes);
        document.getElementById('seconds').innerHTML = formatTime(seconds);
        document.getElementById('milliseconds').innerHTML = formatTime(milliseconds);
    }, 10);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    stop();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('minutes').innerHTML = formatTime(minutes);
    document.getElementById('seconds').innerHTML = formatTime(seconds);
    document.getElementById('milliseconds').innerHTML = formatTime(milliseconds);
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);