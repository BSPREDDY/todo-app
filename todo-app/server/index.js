const express = require('express');
const { createTodo,updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express()
const port = 3000;
app.use(cors())
app.use(express.json())


app.post('/todo',async function(req,res){
    const createpayload = req.body
    const parsedpayload = createTodo.safeParse(createpayload);
    if(!parsedpayload.success){
        res.status(400).json({
            msg:"todo not send"
        }) 
        return;
    }
    //mongodb
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false
    })  
    res.status(201).json({
        msg:'todo created'
    })
})

app.get('/todos',async function(req,res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put('/update',async function(req,res){
    const updateTodos = req.body;
    const parsedpayload = updateTodo.safeParse(updateTodos);
    if(!parsedpayload.success){
        res.status(201).json({
            msg:"todo not update"
        })
        return ;
    }

    await todo.update({
        _id:req.body,id
    },{
        completed:true
    })
    res.json({
        msg:"to marked as completed"
    })
})


// app.delete('',function(req,res){

// })


app.listen(port,
    
    console.log(`port work on ${3000}`))