import mongoose from "mongoose"

const url  ="mongodb+srv://soumik:soumik@cluster0.hwzmmav.mongodb.net/"
export async function dbConnect(){
    try {
        await mongoose.connect(url)
        console.log("Mongo DB Connected")
    } catch (error) {
        console.log("Mongo DB not connected", error)
        
    }
}