const mongoose = require("mongoose");

// const DB = process.env.DATABASE
const DB = "mongodb+srv://nirbhay_91K:nirbhay123@cluster0.xyvcjtb.mongodb.net/imageUpload?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("DATABASE connected")).catch((err)=> console.log("error" + err.message))