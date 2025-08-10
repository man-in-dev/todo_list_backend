import mongoose from "mongoose";

async function connectDB() {
    try {
        const conn = await mongoose.connect("mongodb+srv://manindev16:LMTJB3qNF2QKPG6x@cluster0.spmnm7o.mongodb.net/todo");
        console.log(`Database connected successfully`)
    } catch (error) {
        console.log(`Database connection failed: ${error.message}`)
    }
}

export default connectDB;