import AddItem from './addItem.js';

class Tasks {
  constructor() {
    this.tasks = [];
  }

  getStorage() {
    if (localStorage.getItem('ITEMS') === null) {
      this.tasks = [];
    } else {
      this.tasks = Array.from(JSON.parse(localStorage.getItem('ITEMS')));
    }
  }

  addItem() {
    this.getStorage();
    const input = document.getElementById('itemInput');
    const length = this.tasks.length ? this.tasks.length + 1 : 1;
    const toAdd = { index: length, completed: false, desc: input.value };
    const contentBox = document.body.querySelector('.content');
    contentBox.appendChild(AddItem(toAdd));
    input.value = '';
    localStorage.setItem('ITEMS', JSON.stringify([...JSON.parse(localStorage.getItem('ITEMS') || '[]'), toAdd]));
  }

  removeItem(btn) {
    this.getStorage();
    btn.parentElement.remove();
    localStorage.clear();

    const available = document.querySelectorAll('.desc');
    if (available.length > 0) {
      const newArray = [];
      let length = 1;

      [...available].forEach((child) => {
        const toAdd = { index: length, completed: false, desc: child.innerText };
        newArray.push(toAdd);
        length += 1;
      });
      localStorage.setItem('ITEMS', JSON.stringify(newArray));
    }
  }
}

export default Tasks;
