
import express from 'express'
import { createTodo, delTodo, getAllTodo, updateTodo } from '../controllers/todoController.js'
const todoRoute = express.Router()

todoRoute.post('/create', createTodo) //api = func + url
todoRoute.get('/getAll', getAllTodo) 
todoRoute.delete('/delete/:id', delTodo) 
todoRoute.put('/update/:id', updateTodo) 

export default todoRoute