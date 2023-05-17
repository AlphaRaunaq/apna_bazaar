const mongoose = require('mongoose');


const connectDatabase =( )=>{
    mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce").then((data)=> {
        console.log(`MongoDB is connected with server: ${data.connection.host}`)
    });
}

module.exports = connectDatabase;