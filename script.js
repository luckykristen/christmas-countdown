function christmasCountdown() {
    const christmasDate = new Date("December 25, 2024, 00:00");
    const now = new Date();
    const diff = christmasDate - now;
    console.log(christmasDate, now);

const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInHour = 60 * 60 * 1000;
const msInDay = 24 * 60 * 60 * 1000;

const displayDay = Math.floor(diff/msInDay);
document.querySelector(".days").textContent = displayDay;

const displayHour = Math.floor((diff%msInDay) / msInHour);
document.querySelector(".hours").textContent = displayHour;

const displayMinutes = Math.floor((diff%msInHour) / msInMinute);
document.querySelector(".minutes").textContent = displayMinutes;

const displaySeconds = Math.floor((diff%msInMinute) / msInSecond);
document.querySelector(".seconds").textContent = displaySeconds;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        merryChristmas();
    }

}

let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "MERRY  CHRISTMAS!!!🎉";
    heading.classList.add("red");
}

const button = document.querySelector("#buttonPlay");
button.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
})

const buttonStop = document.querySelector("#buttonStop");
buttonStop.addEventListener("click", function() {
    document.querySelector("#myAudio").pause();
})
