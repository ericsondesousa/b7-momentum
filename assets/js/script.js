window.onload = function () {
    setInterval(setTime, 1000);
}

function showMain() {
    let user = document.querySelector('input[name="user"]').value;

    if (user.length === 0) {
        alert('Você deve inserir algum nome!')
        return
    }

    document.querySelector('.greeting-user').innerHTML = user;    
    document.querySelector('.opening').classList.add('hidden');
    document.querySelector('.content-area').classList.remove('hidden');
    document.querySelector('.bg').classList.add('without-blur');
}

function setTime() {
    var oldValue = document.querySelector('.clock').innerHTML
    var newValue = getTime();
    if (oldValue !== newValue) {    
        document.querySelector('.greeting-text').innerHTML = getGreeting();    
        document.querySelector('.clock').innerHTML = getTime();
    }
}

function getTime() {
    var date = new Date;
    return `${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`;
}

function getGreeting() {
    var date = new Date;
    var hours = date.getHours();
    console.log(hours)
    var greeting = '';

    switch (true) {
        case (hours >= 18 && hours <= 23 || hours >= 00 && hours <= 05):
            greeting = 'Boa noite'
            break;
        case (hours >= 12 && hours <= 18):
            greeting = 'Boa tarde'
            break;
        default:
            greeting = 'Bom dia'
            break;
    }
    return greeting;
}

function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}