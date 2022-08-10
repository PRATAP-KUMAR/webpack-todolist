// import _ from 'lodash';
import './style.css';
import todotasks from './todotasks.js';
import Refresh from './refresh.svg';
import Enter from './enter.svg';
import Menu from './menu.svg';

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

const h3 = document.createElement('h3');
h3.innerText = 'Add to list';
addtolist.appendChild(h3);

const enterBtn = document.createElement('img');
enterBtn.setAttribute('src', Enter);
enterBtn.setAttribute('width', 20);
enterBtn.setAttribute('height', 20);
enterBtn.setAttribute('alt', 'Enter');
addtolist.appendChild(enterBtn);

//
box.appendChild(addtolist);

// insertion starts //
const todoList = (item) => {
  const rowitem = document.createElement('div');
  rowitem.className = 'row-item';

  const boolean = document.createElement('input');
  boolean.type = 'checkbox';

  const desc = document.createElement('div');
  desc.innerText = item.description;

  const menuButton = document.createElement('img');
  menuButton.setAttribute('src', Menu);
  menuButton.setAttribute('width', 20);
  menuButton.setAttribute('height', 20);
  menuButton.setAttribute('alt', 'refresh');

  rowitem.appendChild(boolean);
  rowitem.appendChild(desc);
  rowitem.appendChild(menuButton);

  return rowitem;
};

const content = document.createElement('div');
content.className = 'content';

todotasks.forEach((item) => {
  content.appendChild(todoList(item));
});
// insertion ends //

//
box.appendChild(content);

const clear = document.createElement('div');
clear.className = 'clear';
clear.innerText = 'Clear all Completed';

//
content.appendChild(clear);

document.body.appendChild(box);
