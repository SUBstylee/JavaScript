//set ul.todoList from localstorage
const ulContents = localStorage.getItem('ulTodo');

const form = document.querySelector('#todoForm');
const input = document.querySelector('input#todo');
const todoList = document.querySelector('#todoList');

todoList.innerHTML = ulContents;


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTodo = document.createElement('li');
    const todoSpan = document.createElement('span');
    const finBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const btnSpan = document.createElement('span');

    if (input.value !== '') { //only inserts a new li if there there is user input to display
        finBtn.innerHTML = '&#9989;';
        finBtn.classList.add('finished');//added classes on creation to get the delete and finished buttons to work differently in the todoList event listener
        delBtn.innerHTML = '&#10060;';
        delBtn.classList.add('delete');
        todoSpan.innerText = input.value;
        todoSpan.classList = 'note';

        btnSpan.appendChild(finBtn);
        btnSpan.appendChild(delBtn);
        btnSpan.classList = 'liBtns';

        newTodo.appendChild(todoSpan);
        newTodo.appendChild(btnSpan);
        todoList.appendChild(newTodo);

        input.value = '';//resets the input
    }

});

todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON' && e.target.classList.contains('delete')) {
        e.target.closest('li').remove();
    } else if (e.target.tagName === 'BUTTON' && e.target.classList.contains('finished')) {
        e.target.closest('li').classList.toggle('checked');
    }//different actions depending on which button is pushed.  this could be shorter, but had to play around with it to get it to work, so decided to keep the first bit of code I got to work, as it was a process of checking out different methods before I came up with classlist.contains as a method
});


//set localstorage
window.addEventListener('click', function (e) {
    localStorage.setItem('ulTodo', todoList.innerHTML);
});
