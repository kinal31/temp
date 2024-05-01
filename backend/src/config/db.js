const mongoose = require("mongoose")

// const mongoDbUrl='mongodb+srv://kinalkotheeya2003:JmrmC09JJtQa3wRF@cluster0.byxmiby.mongodb.net/?retryWrites=true&w=majority'




const connectDb=()=>{
    return mongoose.connect(process.env.MONGODB_URI)
}

module.exports={connectDb}