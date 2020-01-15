const Todo = require("../models/todo")

module.exports = {
    GETIndex : function(req,res){
       Todo.find({},(err,data)=>{
           if(err) throw err;
           res.render("index",{todos:data});
       })
    },
    PostIndex: function(req,res){
        const newTodo = Todo(req.body).save((err,data)=>{
            if(err) throw err;
            res.json(data)
        });
    },
    DeleteIndex: function(req,res){
        Todo.find({item: req.params.item.replace(/\-/g," ")}).deleteOne((err,data)=>{
            if(err) throw err;
            res.json(data);
        })
    }
}

