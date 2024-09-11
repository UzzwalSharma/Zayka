// require('dotenv').config(); // Load .env file
const mongoose = require('mongoose');
const Category = require('../models/Category'); // Adjust the path if necessary
const initData = require('../init/categorydata.js'); // Adjust the path if necessary
async function insertSampleData() {
  try {
    // Connect to MongoDB using the connection string from .env
    await mongoose.connect('mongodb+srv://r-blog:RKSp5kMuDud9M15I@cluster0.c6yvedy.mongodb.net/recipeblog?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");

    // Remove any existing data from the 'categories' collection
    await Category.deleteMany({});
    console.log("Existing data removed!");

    // Insert the sample data into the 'categories' collection
    await Category.insertMany(initData.data);
    console.log("Sample recipes data inserted successfully!");

    // Optionally, retrieve and display the inserted data
    const categories = await Category.find({});
    console.log("Inserted categories:", categories);
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
