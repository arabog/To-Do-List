var input = document.querySelector('.input');
const addButton = document.querySelector('.addButton');
const container = document.querySelector('.container');

class Item {
          constructor(itemName) {
                    this.itemName = itemName;
                    this.createDiv(itemName);
          }

          createDiv(itemName) {
                    // cr8 a div
                    let itemBox = document.createElement('div');
                    itemBox.classList.add('item');
          
                    // cr8 an input
                    let input = document.createElement('input');
                    input.value = itemName;
                    input.disabled = true;
                    input.classList.add('item_input');
                    input.type = 'text';

                    // cr8 edit btn
                    let editButton = document.createElement('button');
                    editButton.innerHTML = "EDIT";
                    editButton.classList.add('editButton');

                    // cr8 remove btn
                    let removeButton = document.createElement('button');
                    removeButton.innerHTML = "REMOVE";
                    removeButton.classList.add('removeButton');

                    container.appendChild(itemBox); // itemBox is d div cr8ed

                    itemBox.appendChild(input);
                    itemBox.appendChild(editButton);
                    itemBox.appendChild(removeButton);

                    editButton.addEventListener( 'click', () => this.edit(input));

                    removeButton.addEventListener('click', () => this.remove(itemBox));
          }

          edit(input) {
                    input.disabled = !input.disabled;
          }

          remove(item) {
                    container.removeChild(item);
          }
}

addButton.addEventListener('click', check);
function check() {
          if(input.value != '' ) {
                    new Item(input.value)
                    input.value = '';
          }
}

window.addEventListener('keydown', func);
function func(e) {
          if(e.which == 13) {
                    check();
          }
}

new Item('Sport');
