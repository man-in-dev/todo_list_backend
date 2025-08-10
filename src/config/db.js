import mongoose from "mongoose";

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI);
        console.log(`Database connected successfully`)
    } catch (error) {
        console.log(`Database connection failed: ${error.message}`)
    }
}

export default connectDB;