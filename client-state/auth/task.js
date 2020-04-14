const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('user_id');
const welcomeBlock = document.getElementById('welcome');
const user = localStorage.user;
const outButton = document.getElementById('out__btn');


function welcomeDisplay(id) {
    welcome.textContent = id;
    welcomeBlock.style.display = 'block';
    signin.classList.remove('signin_active');  
    outButton.style.display = 'block';
}

function welcomeDisplayNone() {
    welcome.textContent = '';
    welcomeBlock.style.display = 'none'; 
    outButton.style.display = 'none';
}

function formDisplay() {
    signin.classList.add('signin_active');
    form.addEventListener ('submit', (e) => {
        let formData = new FormData(form);
        let request = new XMLHttpRequest();
        //url = form.getAttribute("action");
    
        request.open('POST','https://netology-slow-rest.herokuapp.com/auth.php');
    
        request.addEventListener('readystatechange', function() {
            if (request.readyState === request.DONE && request.status === 200) {
              const data = JSON.parse(this.responseText);
              console.log(data);
              if (!data.success) {
                  alert('Неверный логин/пароль');
              } else {
                localStorage.user = data.user_id;
                welcomeDisplay(data.user_id);
              }
              form.reset();
            }
          } )    
           
    
        request.send(formData);
    
        e.preventDefault();
    
    
    })    
}


if (user) {
    welcomeDisplay(user);
} else {
    formDisplay();
}

outButton.addEventListener('click', e => {
    confirm('Хотите выйти?');   
    delete localStorage.user;
    welcomeDisplayNone();
    formDisplay(); 
  }
);         



