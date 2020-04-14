
const inputField = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskButton = document.getElementById('tasks__add');

function insertTask () {
    text = inputField.value;
    console.log(text);

    if (text.trim()) {
        tasksList.innerHTML += `
      <div class="task">
        <div class="task__title">
            ${text}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`;

      inputField.value = null;
    }
    
    const taskRemoveButton = Array.from(document.querySelectorAll('.task__remove'));
    for (let i = 0; i < taskRemoveButton.length; i++) {
        const tasksRemoveList = Array.from(document.querySelectorAll('.task'));
        taskRemoveButton[i].addEventListener('click', e => {
            e.preventDefault();

            function findTask() {
                for (let j = 0; j < tasksRemoveList.length; j++) {
                    if (j === i) {
                        return tasksRemoveList[j];     
                    }           
                }
            }
            const taskRemove = findTask();

            taskRemove.remove();
          }
        );  
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
