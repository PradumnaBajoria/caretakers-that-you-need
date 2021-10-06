//Packages
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//Intialization
const app = express();
const Port = process.env.PORT || 5000;


// Server Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Importing Routes
const routerUrls = require("./routes/emailroute");
const authRoute = require("./routes/auth");



//DB Connection
dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
}, () => console.log("Database Connected successfully..!!"));


//Calling Of All Routes
app.use("/app", routerUrls);
app.use("/app", authRoute);


//404 Page for the webApp
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found"
    })
})


//Server Listening At This Port
app.listen(Port, () => { console.log(`Server has started listening on Port ${Port}`) })