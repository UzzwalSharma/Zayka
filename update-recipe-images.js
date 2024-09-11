const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Recipe = require("./models/Recipe.js"); // Adjust the path as needed

// Load environment variables
dotenv.config();

// Cloudinary base URL (replace with your actual Cloudinary URL prefix)
const cloudinaryBaseUrl = 'https://res.cloudinary.com/dvmqxb8kd/image/upload/';

// MongoDB connection string (update with your connection details)


const updateRecipeImages = async () => {
  try {
    await mongoose.connect('mongodb+srv://r-blog:RKSp5kMuDud9M15I@cluster0.c6yvedy.mongodb.net/recipeblog?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Find all recipes with image URLs
    const recipes = await Recipe.find({ image: { $exists: true, $ne: "" } });

    for (const recipe of recipes) {
      if (recipe.image) {
        // Replace local image URL with Cloudinary URL
        const newImageUrl = recipe.image.replace('/uploads/', cloudinaryBaseUrl);
        recipe.image = newImageUrl;

        // Save the updated document
        await recipe.save();
        console.log(`Updated image URL for recipe with _id: ${recipe._id}`);
      }
    }

    console.log('All image URLs have been updated');
  } catch (err) {
    console.error('Error updating image URLs:', err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the update
updateRecipeImages();



