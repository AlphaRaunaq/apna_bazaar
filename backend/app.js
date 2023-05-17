const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

require('dotenv').config();

// const errorMiddleware = require("./middleware/error");

app.listen(process.env.PORT, ()=> {
  console.log(`Server is listening on ${process.env.PORT}`);
})


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");


app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);




// Middleware for Errors

module.exports = app;