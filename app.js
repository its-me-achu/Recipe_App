const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConfig");
const recipesRoutes = require("./routes/recipesRoutes");

const app = express();

//Connect to MongoDB:
connectDB();

//Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/recipes", recipesRoutes);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is Running on the port ${PORT}`);
});

