const daysElement = document.querySelector('#days');//Bilgileri Alıyoruz.
const hoursElement = document.querySelector('#hours');//Bilgileri Alıyoruz.
const minutesElement = document.querySelector('#mins');//Bilgileri Alıyoruz.
const secondsElement = document.querySelector('#seconds');//Bilgileri Alıyoruz.

const newYears ='01 Jan 2025';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);