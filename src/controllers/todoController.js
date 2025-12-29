
// CRUD 
//create: post
//read : get
//update: put / patch
//delete: delete

//  200 - success ok
//  201 - created
//  400 - bad request
//  401- unathorised
//  402- payment error
//  403- forbidden
//  404- page not found
//  408- timeout
//  500 - internal server error

import todoSchema from "../models/todoSchema.js"
//create a todo
export const createTodo = async (req, res) => {
    try {
        const { title } = req.body
        const data = await todoSchema.create({ title })
        return res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: data
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Todo not created "
        })

    }
}

//read all todos
export const getAllTodo = async (req, res) => {
    try {
        const data = await todoSchema.find({})
        return res.status(200).json({
            success: true,
            message: "Todo fetched successfully",
            data: data
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Todo not fetched "
        })

    }
}


//delete a  todo
export const delTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const data = await todoSchema.findByIdAndDelete({ _id: todoId })
        if (data) {
            return res.status(200).json({
                success: true,
                message: "Todo deleted successfully",
                data: data
            })
        }
        else {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            })

        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Todo not deleted "
        })
    }
}


//update a todo
export const updateTodo = async(req, res)=>{
    try {
        const {title} = req.body
        const todoId = req.params.id

        const data = await todoSchema.findOne({_id:todoId})
        if(!data){
             return res.status(404).json({
                success: false,
                message: "Todo not found"
            })
        }
        data.title = title
        await data.save()

         return res.status(200).json({
                success: true,
                message: "Todo updated successfully",
                data: data
            })
        
    } catch (error) {
         return res.status(500).json({
                success: false,
                message: "Todo not updated"
            })
        
    }
}