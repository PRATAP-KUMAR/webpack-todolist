import Delete from '../assets/delete.svg';

const AddItem = (item) => {
  const rowitem = document.createElement('div');
  rowitem.className = 'row-item';

  const boolean = document.createElement('input');
  boolean.setAttribute('id', 'checkbox');
  boolean.type = 'checkbox';
  boolean.checked = item.completed;
  if (boolean.checkd) {
    boolean.click();
  }

  const desc = document.createElement('div');
  desc.className = 'desc';
  desc.innerText = item.desc;
  desc.contentEditable = true;

  const delImg = document.createElement('img');
  delImg.setAttribute('src', Delete);
  delImg.setAttribute('width', 30);
  delImg.setAttribute('height', 30);
  delImg.setAttribute('alt', 'showmenu');

  const delButton = document.createElement('button');
  delButton.setAttribute('id', 'delButton');
  delButton.appendChild(delImg);

  rowitem.appendChild(boolean);
  rowitem.appendChild(desc);
  rowitem.appendChild(delButton);

  return rowitem;
};

export default AddItem;
