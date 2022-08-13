import AddItem from './modules/addItem.js';
import './style.css';
import Refresh from './assets/refresh.svg';
import Enter from './assets/enter.svg';
// import Tasks from './modules/tasks.js';

const box = document.createElement('div');
box.className = 'box';

const sticky = document.createElement('div');
sticky.className = 'sticky';

const h2 = document.createElement('h2');
h2.innerText = "Today's To Do";
sticky.appendChild(h2);

const refreshBtn = document.createElement('img');
refreshBtn.setAttribute('src', Refresh);
refreshBtn.setAttribute('width', 20);
refreshBtn.setAttribute('height', 20);
refreshBtn.setAttribute('alt', 'refresh');
sticky.appendChild(refreshBtn);

//
box.appendChild(sticky);

const addtolist = document.createElement('div');
addtolist.className = 'addtolist';

const form = document.createElement('input');
form.setAttribute('id', 'itemInput');
form.setAttribute('type', 'input');
form.setAttribute('name', 'add list item');
form.setAttribute('placeholder', 'Add list item');
addtolist.appendChild(form);

const enterButton = document.createElement('button');
enterButton.setAttribute('id', 'enterButton');
addtolist.appendChild(enterButton);

const enterBtn = document.createElement('img');
enterBtn.setAttribute('src', Enter);
enterBtn.setAttribute('width', 20);
enterBtn.setAttribute('height', 20);
enterBtn.setAttribute('alt', 'Enter');
enterButton.appendChild(enterBtn);

//
box.appendChild(addtolist);

const content = document.createElement('div');
content.className = 'content';

box.appendChild(content);

const section = document.body.querySelector('#todo-list');
section.appendChild(box);

// const tasks = new Tasks();

let tasks;

window.onload = () => {
  if (localStorage.getItem('ITEMS') === null) {
    tasks = [];
    return;
  }
  tasks = Array.from(JSON.parse(localStorage.getItem('ITEMS')));
  tasks.forEach((item) => content.appendChild(AddItem(item)));
};

const addTask = () => {
  const input = document.getElementById('itemInput');
  if (input.value !== '') {
    if (localStorage.getItem('ITEMS') === null) {
      tasks = [];
    } else {
      tasks = Array.from(JSON.parse(localStorage.getItem('ITEMS')));
    }
    let length;
    if (tasks.length === 0) {
      length = 1;
    } else {
      length = tasks.length + 1;
    }
    const toAdd = { index: length, completed: false, desc: input.value };
    localStorage.setItem('ITEMS', JSON.stringify([...JSON.parse(localStorage.getItem('ITEMS') || '[]'), toAdd]));
    content.appendChild(AddItem(toAdd));
    input.value = '';
  }
};

// event listeners
document.getElementById('enterButton').addEventListener('click', () => addTask());

document.getElementById('itemInput').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
// event listeners

// last item appending
const clear = document.createElement('button');
clear.setAttribute('id', 'clearbutton');
clear.className = 'clear';
clear.innerText = 'Clear all Completed';

clear.addEventListener('click', () => {
  const toremove = document.querySelectorAll('input:checked');
  [...toremove].forEach((checkbox) => {
    checkbox.parentElement.remove();
  });
  localStorage.clear();
});

box.appendChild(clear);
