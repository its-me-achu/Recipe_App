const Recipe = require("../models/recipesModel");


// Get all recipes
const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get a single recipe by ID
const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ error: "Recipe not found" });
        res.json(recipe);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Create a new recipe
const createRecipe = async (req, res) => {
    try {
        const { name, ingredients, instructions, cookingTime } = req.body;
        const newRecipe = new Recipe({ name, ingredients, instructions, cookingTime });
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        console.group(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Update a recipe by ID
const updateRecipe = async (req, res) => {
    try {
        const { name, ingredients, instructions, cookingTime } = req.body;
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            { name, ingredients, instructions, cookingTime },
            { new: true, runValidators: true }
        );
        if (!recipe) return res.status(404).json({ error: "Recipe not found" });
        res.json(recipe);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete a recipe by ID
const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) return res.status(404).json({ error: "Recipe not found" });
        res.json({ message: "Recipe deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
};