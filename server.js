const express = require("express") ;
const mongoose = require("mongoose") ;
const cors = require("cors") ;
const { config } = require("dotenv");
require("dotenv").config() ;

const app = express() ;

const transactionRouter = require("./routes/transactionRoutes") ;


//middleware
app.use(cors()) ;
app.use(express.json()) ;

mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log("MongoDB Connected"))
    .catch((err)=> console.log(err)) ;

app.use("/api/transactions", transactionRouter) ;

app.listen(process.env.PORT, () =>{
    console.log(`Server running on port ${process.env.PORT}`) ;
}) ;