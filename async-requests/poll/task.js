const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();

xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      const data = JSON.parse(this.responseText);
      console.log(data);
      const title = data.data.title;
      const answers = data.data.answers;
      console.log(title);
      console.log(answers);
      pollTitle.textContent = title;     
      for (let i in answers) {
          const answer = answers[i];
          pollAnswers.innerHTML += `
          <button class="poll__answer">
              ${answer}
          </button>`;          
      
        }
        const buttons = Array.from(document.querySelectorAll('.poll__answer'));
        for (let i in buttons) {
            buttons[i].addEventListener('click', e => {
                e.preventDefault();
                alert('Спасибо, ваш голос засчитан!');     
              }
            );         
        
          }        
       
    }
  }  
)    

