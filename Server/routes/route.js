import express from "express";
import {AddTodo,getAllTodos,toggleTodoDone,updateTodo,deleteTodo} from '../Controller/todo-controller.js'

const route = express.Router();


route.post('/todos',AddTodo);
route.get('/todos',getAllTodos);
route.get('/todos/:id',toggleTodoDone);
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id',deleteTodo);



export default route;