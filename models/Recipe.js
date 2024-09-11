const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This is required",
  },
  description: {
    type: String,
    required: "This is required",
  },
  email: {
    type: String,
    required: "Email is required",
  },
  ingredients: {
    type: [String], // Array of strings
    required: "This is required",
  },
  category: {
    type: String,
    enum: [
      "Thai",
      "American",
      "Chinese",
      "Mexican",
      "Indian",
    ],
    required: "Category is required",
  },
  image: {
    type: String, // Image file path or URL
    required: false
  },
  instructions: {
    type: String,
    
},
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
