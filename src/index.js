import Tasks from './modules/tasks.js';
import AddItem from './modules/addItem.js';
import './style.css';
import Refresh from './assets/refresh.svg';
import Enter from './assets/enter.svg';

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

box.appendChild(addtolist);

const content = document.createElement('div');
content.className = 'content';

box.appendChild(content);

const section = document.body.querySelector('#todo-list');
section.appendChild(box);

const tasks = new Tasks();

window.onload = () => {
  if (localStorage.getItem('ITEMS') === null) {
    tasks.tasks = [];
    return;
  }
  tasks.tasks = Array.from(JSON.parse(localStorage.getItem('ITEMS')));
  tasks.tasks.forEach((item) => content.appendChild(AddItem(item)));

  document.querySelectorAll('#delButton').forEach((btn) => btn.addEventListener('click', () => tasks.removeItem(btn)));
};

document.getElementById('enterButton').addEventListener('click', () => tasks.addItem());

document.getElementById('itemInput').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    tasks.addItem();
  }
});
