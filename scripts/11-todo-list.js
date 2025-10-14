const todoList = [{
        name : 'wake up',
        dueDate: '2022-12-22'
    }, 
    {
        name : 'go to gym',
        dueDate: '2022-12-22'
    }];


renderTodoList();

function renderTodoList() {

    let todoListHTML ='';

    for(let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];

        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate; (This is just normal Object line)
        // below code is destructuring method to get simplified lines
        
        const { name, dueDate } = todoObject;
        const html = `
        <p>
            ${name} ${dueDate}
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button>
        </p>
        `;
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}