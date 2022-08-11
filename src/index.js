import AddItem from './modules/addItem.js';
import './style.css';
import Refresh from './refresh.svg';
import Enter from './enter.svg';
import Items from './modules/items.js';

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

let items = new Items();

window.onload = () => {
  items.data = JSON.parse(localStorage.getItem('ITEMS'));
  if (items.data === null) {
    items.data = [];
    return;
  }
  items.data.forEach((item) => content.appendChild(AddItem(item)));
};

const inputAdd = () => {
  const input = document.getElementById('itemInput');
  if (input.value !== '') {
    const task = { index: 1, completed: false, desc: input.value };
    content.appendChild(AddItem(task));
    items.itemAdd(task);
    input.value = '';
  }
};

// event listeners
document.getElementById('enterButton').addEventListener('click', () => inputAdd());

document.getElementById('itemInput').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    inputAdd();
  }
});
// event listeners

// last item appending
const clear = document.createElement('button');
clear.setAttribute('id', 'clearbutton');
clear.className = 'clear';
clear.innerText = 'Clear all Completed';

const strikeThrough = document.querySelectorAll('input[type="checkbox"]');
[...strikeThrough].forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    checkbox.remove();
  });
});

clear.addEventListener('click', () => {
  const toremove = document.querySelectorAll('input:checked');
  [...toremove].forEach((checkbox) => {
    checkbox.parentElement.remove();
  });
  items = [];
  const newArray = document.querySelectorAll('.row-item > div');
  [...newArray].forEach((ele) => {
    const newTask = { index: 1, completed: false, desc: ele.innerText };
    items.push(newTask);
  });
  localStorage.setItem('ITEMS', JSON.stringify(items));
});

box.appendChild(clear);
