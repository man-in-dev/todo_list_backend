import express from "express"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

import Todo from "./models/todo.js";
import connectDB from "./config/db.js";

connectDB();

app.use(cors());
app.use(express.json());

// create a todo - service 1
app.post("/create-todo", async function (req, res) {
    try {
        const data = req.body;

        await Todo.create(data);

        res.json("Todo created successfully")

    } catch (error) {
        res.json("server error")
    }
});


// get all todo - service 2
app.get("/get-all-todo", async function (req, res) {
    try {
        const todos = await Todo.find();

        res.json({ message: "Todo fetched successfully", todos });

    } catch (error) {
        res.json("server error")
    }
});


// req.body = {
//     id: ""
// }

// /update-todo/234234234234

// update todo - service 3
app.put("/update-todo/:id", async function (req, res) {
    try {
        // const id = req.body.id -> 1st method
        const id = req.params.id // -> 2nd method

        const data = req.body;

        await Todo.findByIdAndUpdate(id, data);

        res.json("Todo updated successfully");

    } catch (error) {
        res.json("server error")
    }
});

// /delete-todo/234234234234

// delete todo - service 4
app.delete("/delete-todo/:id", async function (req, res) {
    try {
        // const id = req.body.id -> 1st method
        const id = req.params.id // -> 2nd method

        await Todo.findByIdAndDelete(id);

        res.json("Todo deleted successfully");

    } catch (error) {
        res.json("server error")
    }
});

app.listen(8000, function () {
    console.log(`server is running`)
});