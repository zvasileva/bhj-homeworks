
const inputField = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskButton = document.getElementById('tasks__add');

function insertTask () {
    text = inputField.value;

    if (text.trim()) {
        tasksList.insertAdjacentHTML("afterBegin",
     `<div class="task">
        <div class="task__title">
            ${text}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`);

      inputField.value = null;
    }   

}

inputField.addEventListener('change', e => {
    e.preventDefault();
    insertTask();
  }
);

taskButton.addEventListener('click', e => {
    e.preventDefault();
    insertTask();
  }
);

tasksList.addEventListener("click", (e) => {
    let target = e.target;

    if (target.classList.contains('task__remove')) {
        target.parentElement.remove();
    }
    
   });    
