
import express from 'express'
import { createTodo, getAllTodo } from '../controllers/todoController.js'
const todoRoute = express.Router()

todoRoute.post('/create', createTodo) //api = func + url
todoRoute.get('/getAll', getAllTodo) 

export default todoRoute