const items = document.getElementById('items');
const loaderImg = document.getElementById('loader');

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();

xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      const data = JSON.parse(this.responseText);
      const dataValute = data.response.Valute;
      console.log(data.response.Valute);
      for (let i in dataValute) {
          const code = data.response.Valute[i].CharCode;
          const value = data.response.Valute[i].Value;
          items.innerHTML += `
          <div class="item">
              <div class="item__code">
                ${code}
              </div>
              <div class="item__value">
                ${value}
              </div>
              <div class="item__currency">
                  руб.
              </div>
          </div>`;          
      
        }
      if (loaderImg) {
        loaderImg.classList.remove('loader_active');
      }
    }
  }  
)    

