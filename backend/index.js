import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling cors policy
//Option 1: Allow all origins with default cors (*)
// app.use(cors());

//Option 2: Allow custom origins
app.use(
    cors({
        origin: "https://book-store-mern-stack-fzx9bb53l-sujal-kumar-ghoshs-projects.vercel.app/",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
)

app.get('/', (request, response) => {
    console.log("Root route hit");
    return response.status(234).send('Welcome to MERN Stack Tutorial')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("DB connected");
        app.listen(PORT, ()=>{
        console.log(`App listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });