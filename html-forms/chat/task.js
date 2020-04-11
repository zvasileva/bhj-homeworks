const chat = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages');

chat.addEventListener("click", () => {
    chat.classList.add('chat-widget_active');
}); 

const inputField = document.getElementById('chat-widget__input');

function getCurrentFormattedTime() {
    const dt = new Date();
    const hh = String(dt.getHours()).padStart(2, "0");
    const mi = String(dt.getMinutes()).padStart(2, "0");
    console.log(`${hh}:${mi}`);
    return `${hh}:${mi}`;
}

function addUserMessage() {
    const timeCurrent = getCurrentFormattedTime();
    const messageText = inputField.value;
    if (messageText.trim()) {
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${timeCurrent}</div>
          <div class="message__text">${messageText}</div>
        </div>
      `;
      inputField.value = null;
    }
    scrollToBottom();    
}

function addRobotMessage() {
    const timeCurrent = getCurrentFormattedTime();
    const messageText = getRobotMessage();
    const messages = document.querySelector( '.chat-widget__messages' );
    if (messageText.trim()) {
        messages.innerHTML += `
        <div class="message">
          <div class="message__time">${timeCurrent}</div>
          <div class="message__text">${messageText}</div>
        </div>
      `;
      inputField.value = null;
    }  
    scrollToBottom();  
}

function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  
}

function getRobotMessage() {
    const messages = [
        'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
        'Никого нет',
        'Мы тут',
        'Привет',
        'Нет никого на связи',
        'Ок',
        'Пока'
      ],
      index = Math.floor(Math.random() * messages.length);

    return messages[index];
  }

function scrollToBottom() {
  messages.lastElementChild.scrollIntoView();
}


inputField.addEventListener('change', e => {
    addUserMessage();
    const f1000 = delay(addRobotMessage, 1000);
    f1000();
  }
);

