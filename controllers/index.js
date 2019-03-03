var Todos = require('../data/todos');

module.exports={
    index,
    addTodos,
    delete: deleteItem
}

function index(req,res){
    
    
        res.render('index',{title:'To Do List',todos:Todos.getAll()})
}

function addTodos(req, res) {
    console.log(req.body);
    req.body.done=false;
    Todos.create(req.body);
    
    res.redirect('/');

}

function deleteItem(req,res){
    Todos.delete(parseInt(req.params.id));
    res.redirect('/');
}