const editor = document.getElementById('editor');
const button = document.getElementById('reset__btn');

if (localStorage.text) {
    editor.value = localStorage.text;
}

editor.addEventListener('input', e => {
    localStorage.text = editor.value;
  }
)

button.addEventListener('click', e => {
    delete localStorage.text;
    editor.value = '';
  }
);    