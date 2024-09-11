
// require('dotenv').config(); // Load .env file if needed
const mongoose = require('mongoose');
const Recipe = require('../models/Recipe'); // Adjust the path if necessary
const recipes = require('../init/recipedata.js'); // Adjust the path if necessary

async function insertSampleData() {
  try {
    // Connect to MongoDB using the connection string from .env
    await mongoose.connect('mongodb+srv://r-blog:RKSp5kMuDud9M15I@cluster0.c6yvedy.mongodb.net/recipeblog?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");

    // Remove any existing data from the 'recipes' collection
    await Recipe.deleteMany({});
    console.log("Existing data removed!");

    // Insert the sample data into the 'recipes' collection
    await Recipe.insertMany(recipes);
    console.log("Sample recipes data inserted successfully!");

    // Optionally, retrieve and display the inserted data
    const insertedRecipes = await Recipe.find({});
    console.log("Inserted recipes:", insertedRecipes);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
    console.log("MongoDB connection closed.");
  }
}

// Call the function to insert the data
insertSampleData();
