class Items {
  constructor() {
    this.items = [];
  }

  itemAdd(item) {
    this.items.push(item);
    localStorage.setItem('ITEMS', JSON.stringify(this.items));
  }
}

export default Items;
