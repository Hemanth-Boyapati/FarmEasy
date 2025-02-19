const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Couldn't connect to MongoDB", err));

app.use(express.json());

app.use(require('./router/login'))

app.listen(5000, () => {
    console.log("Running on port: 5000");
})