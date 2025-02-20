const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: 
    { type: String, 
        required: true },
    ingredients:
     { type: String, 
        required: true },
    instructions:
     { type: String,
         required: false},
    cookingTime: 
    { type: Number, 
    required: true }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;


