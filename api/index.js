const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express();

const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')

dotenv.config();

mongoose.connect(
    process.env.MONGO_CONNECTION
).then(()=>{
    console.log("DB Connection Successful")
}).catch((error)=> {
    console.log(error)
});

app.use(express.json())
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is Running on Port 5000")
});