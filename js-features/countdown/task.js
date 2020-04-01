const timerValue = document.getElementById("timer");

const dt = new Date();
const sec = dt.getSeconds();
let timerId = null;

timerValue.textContent = sec;


function timer() {
    if (timerValue.textContent > 0) {
        timerValue.textContent = timerValue.textContent - 1;
    } else if (timerValue.textContent <= 0) {     
        alert("Вы выиграли в конкурсе!");
        clearInterval(timerId);
        
    }
}

timerId = setInterval(() => timer(), 1000);





