import Delete from '../assets/delete.svg';

const removeTask = () => {
  const toRemove = document.getElementById('delButton');
  toRemove.parentElement.remove();

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
};

const AddItem = (item) => {
  const rowitem = document.createElement('div');
  rowitem.className = 'row-item';

  const boolean = document.createElement('input');
  boolean.setAttribute('id', 'checkbox');
  boolean.type = 'checkbox';

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
  delButton.addEventListener('click', removeTask);

  rowitem.appendChild(boolean);
  rowitem.appendChild(desc);
  rowitem.appendChild(delButton);

  return rowitem;
};

export default AddItem;
