
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
export const createTodo = async(req, res)=>{
    try {
        const {title} = req.body
        const data = await todoSchema.create({title})
        return res.status(201).json({
            success:true,
            message:"Todo created successfully",
            data:data
        })
        
    } catch (error) {
          return res.status(500).json({
            success:false,
            message:"Todo not created "
        })
        
    }
}

//read all todos
export const getAllTodo = async(req, res)=>{
    try {
        const data = await todoSchema.find({})
        return res.status(200).json({
            success:true,
            message:"Todo fetched successfully",
            data:data
        })
        
    } catch (error) {
          return res.status(500).json({
            success:false,
            message:"Todo not fetched "
        })
        
    }
}