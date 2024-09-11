require('dotenv').config();

const port = 3000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Category = require("./models/Category.js"); // Import the Category model
const Recipe = require("./models/Recipe.js"); // Import the Recipe model
// const recipes = require("./models/recipes.js"); // Import the Recipe model



// Connect to MongoDB
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://r-blog:RKSp5kMuDud9M15I@cluster0.c6yvedy.mongodb.net/recipeblog?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("Successfully connected to MongoDB");
}

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Render the homepage and fetch categories from the database
app.get("/", async (req, res) => {
  try {
    const categories = await Category.find({}); // Fetch all categories from the database
    res.render("main.ejs", { categories }); // Pass the fetched categories to the EJS template
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Internal Server Error");
  }
});


// view all page
app.get("/view-all", async (req, res) => {
  try {
    const categories = await Category.find({}); // Fetch all categories from the database
    res.render("view-all.ejs", { categories }); // Pass the fetched categories to the EJS template
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Internal Server Error");
  }
});



// Show route for each category (display recipes related to the selected category)

app.get("/category/:name", async (req, res) => {
  const categoryName = req.params.name;

  try {
    // Fetch recipes that belong to the selected category
    const recipes = await Recipe.find({ category: { $regex: new RegExp(categoryName, 'i') } });

    // Render the category page and pass the recipes and category name
    res.render("show-category.ejs", { categoryName, recipes });
  } catch (err) {
    console.error("Error fetching recipes:", err);
    res.status(500).send("Internal Server Error");
  }
});


app.get('/coming-soon', (req, res) => {
  res.render('comingsoon.ejs');
});

app.get('/recipe/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id); // Fetch the recipe by ID
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.render('recipe-details', { recipe }); // Render the recipe details page
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
// About route
app.get('/about', (req, res) => {
  // Pass any data you want to render on the page, like the site title
  res.render('about', {
      siteTitle: 'Zayka' // You can customize this title
  });
});


// Route for the onboarding guide
app.get('/onboarding', (req, res) => {
    res.render('onboarding'); // Render the onboarding.ejs template
});

// GET form for submitting a new recipe
app.get('/submit', (req, res) => {
  res.render('submit-recipe');
});
// Route to show all recipes
app.get('/recipes', async (req, res) => {
  try {
      // Fetch all recipes from the database
      const recipes = await Recipe.find({});
      // Render the 'all-recipes' EJS view and pass the recipes data
      res.render('recipes', { recipes });
  } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving recipes');
  }
});

// Easter Egg route
app.get('/easter-egg', (req, res) => {
  res.render('easteregg');
});






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




