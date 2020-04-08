class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.timerId = null;

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  timer(cntSec) { 

    const timerValue = document.getElementById("timer");
    timerValue.textContent = cntSec;

    const timer = () =>  {
        if (timerValue.textContent > 0) {
            timerValue.textContent = timerValue.textContent - 1;
        } else if (timerValue.textContent <= 0) {     
            alert("Время закончилось! Вы проиграли!");
            this.reset();
        
        }
    }

    this.timerId = setInterval(() => timer(), 1000);

  }

  stopTimer() {
    if (this.timerId > 0) {
        clearInterval(this.timerId);
        this.timerId = null;
    }
  }     


  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */

    const getPressKey = (event) => {
      const currentSymbol = this.currentSymbol.textContent.toUpperCase();
      const pressKey = String.fromCharCode(event.keyCode).toUpperCase();
      if (pressKey === currentSymbol) {
        this.success();
      } else {
        this.fail();
      }  
  
     }

     document.addEventListener('keypress', getPressKey);

  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);

    this.stopTimer();

    this.timer(word.length);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript',
        'привет',
        'день',
        'добро',
        'привет day'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));


