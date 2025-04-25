import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";


const app = express();

app.use(bodyParser.json());

let mongoUrl = "mongodb+srv://anusha:Anusha2002@cluster0.pv62u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Connection successfully complete");
});


app.listen(3000, () => {
    console.log("Service Running on Port 3000");
});