let todoList = [
   
];
//displayItem();

function addTodo(){
    let inputElement = document.querySelector('#inpbox');
    let inputdate = document.querySelector('#todo-date'); 
    let todoElement = inputElement.value;
    let tododate = inputdate.value;
    todoList.push({item: todoElement, due_date: tododate});
    inputElement.value ='';
    inputdate.value ='';
    displayItem();
}

function displayItem(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml ='';

    for( let i = 0; i < todoList.length; i++){
      //  let item = todoList[i].item;
      //  let dueDate = todoList[i].due_date;
        let {item , due_date} = todoList[i];
        newHtml += `
        <span> ${item}</span>
        <span> ${due_date}</span>
        <button class ='deletebtn' onclick ="todoList.splice(${i}, 1);displayItem();">delete</button>        
        `;
    }
    containerElement.innerHTML = newHtml;
}