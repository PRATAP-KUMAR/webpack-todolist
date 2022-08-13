class Tasks {
  constructor() {
    this.tasks = [];
  }

  itemAdd(task) {
    this.tasks = JSON.parse(localStorage.getItem('ITEMS' || '[]'));
    this.tasks.push(task);
    localStorage.setItem('ITEMS', JSON.stringify(this.tasks));
  }
}

export default Tasks;
