const userList = document.querySelectorAll('.name-list li');
const listInput = document.querySelector('.list-input');
const addListBtn = document.querySelector('.addListBtn');

addListBtn.addEventListener('click', function (){
    //create element
    const newLi = document.createElement('LI');
    const textLi = document.createTextNode('listInput.value');

    newLi.appendChild(textLi);

    userList.appendChild(newLi);
});

