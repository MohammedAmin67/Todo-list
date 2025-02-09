const todoList =JSON.parse(localStorage.getItem('todoList')) || [];
 

renderTodoList();

function renderTodoList(){
let todoListHTML = ''

for(let i=0;i<todoList.length;i++){
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject; 
    const html = `<div>${name}</div> 
    <div>${dueDate}</div> 
     <button onclick="
     todoList.splice(${i},1);
     renderTodoList();
     saveItems();" 
     class="delete-button">Delete</button>`
    todoListHTML += html;  
}

console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}



function addTodo(){ 
    const inputElement = document.querySelector('.js-name');
    const name = inputElement.value;

    const dueDateElement = document.querySelector('.js-calendar');
    const dueDate = dueDateElement.value;

    

    todoList.push({
        name,
        dueDate
    });
    console.log(todoList)

    inputElement.value = '';




    renderTodoList();
    saveItems();



}


function saveItems(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}