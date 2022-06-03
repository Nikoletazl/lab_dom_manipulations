function addItem() {
    const content = document.getElementById('newItemText').value;
    const liElement = document.createElement('li');

    liElement.textContent = content
    const ulElement = document.getElementById('items').appendChild(liElement)
    
    document.getElementById('newItemText').value = '';

}