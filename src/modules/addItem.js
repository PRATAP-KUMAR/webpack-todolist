import Menu from '../menu.svg';

const AddItem = (item) => {
  const rowitem = document.createElement('div');
  rowitem.className = 'row-item';

  const boolean = document.createElement('input');
  boolean.setAttribute('id', 'checkbox');
  boolean.type = 'checkbox';

  const desc = document.createElement('div');
  desc.innerText = item.desc;

  const menuButton = document.createElement('img');
  menuButton.setAttribute('src', Menu);
  menuButton.setAttribute('width', 20);
  menuButton.setAttribute('height', 20);
  menuButton.setAttribute('alt', 'showmenu');

  rowitem.appendChild(boolean);
  rowitem.appendChild(desc);
  rowitem.appendChild(menuButton);

  return rowitem;
};

export default AddItem;
