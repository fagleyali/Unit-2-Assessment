
const todos=[
    
]

module.exports={
    create,
    getAll,
    delete: deleteItem
}

function create(todo){
    todos.push(todo);
}

function getAll(){
    return todos;
}

function deleteItem(todo){
    todos.splice(todo,1);
}
