const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express();

dotenv.config();

mongoose.connect(
    process.env.MONGO_CONNECTION
).then(()=>{
    console.log("DB Connection Successful")
}).catch((error)=> {
    console.log(error)
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is Running on Port 5000")
});