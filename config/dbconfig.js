const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://achu88382m:2LBh3vFBRlFZzgZ2@cluster0.asrou.mongodb.net/taskRecipesApp");
        console.log("Database Connected");
    } catch  (error) {
        console.log("Database Connection Failed");
    } 
};

module.exports = connectDB;