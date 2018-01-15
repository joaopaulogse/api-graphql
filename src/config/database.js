const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/mydb");

mongoose.connection.on("open", (err, data)=>{
    console.info(`Database Connected!`)
})
mongoose.connection.on("error", (err, data)=>{
    console.error(`Error: ${data.message}`)
})

module.exports = mongoose;