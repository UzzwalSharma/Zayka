const recipes = [
    {
      name: "Chinese-steak-tofu",
      description: "A delicious stir-fry of steak and tofu, marinated in soy sauce and garlic.",
      email: "chef@example.com",
      ingredients: [
        "Steak",
        "Tofu",
        "Soy sauce",
        "Garlic",
        "Ginger",
        "Green onions",
        "Sesame oil"
      ],
      category: "Chinese",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726018616/my-recipes-folder/sir8bsk5sktafhlav2pt.jpg",
      instructions: "Get your prep done first, for smooth cooking. Chop the steak into 1cm chunks, trimming away and discarding any fat.\n        Peel and finely chop the garlic and ginger and slice the chilli. Trim the spring onions, finely slice the top green halves and put aside, then chop the whites into 2cm chunks. Peel the carrots and mooli or radishes, and chop to a similar size.\n        Place a large pan on a medium-high heat and toast the Szechuan peppercorns while it heats up. Tip into a pestle and mortar, leaving the pan on the heat.\n        Place the chopped steak in the pan with 1 tablespoon of groundnut oil. Stir until starting to brown, then add the garlic, ginger, chilli, the white spring onions, carrots and mooli or radishes.\n    \n        Source: https://www.jamieoliver.com/recipes/stew-recipes/chinese-steak-tofu-stew/"
      
    },
    {
      name: "Chocolate-whoopies",
      description: "Soft chocolate cake-like cookies with a sweet creamy filling.",
      email: "burgerlover@example.com",
      ingredients: [
        "Cocoa powder",
        "Flour",
        "Butter",
        "Sugar",
        "Eggs",
        "Vanilla extract",
        "Cream cheese"
      ], instructions: "Chocolate Cake instructions...",
      category: "American",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726018907/my-recipes-folder/eeics8tohvrhwthu8gqw.jpg"
    },
    {
      name: "Crab-cake",
      description: "Crispy and flavorful crab cakes with fresh herbs and breadcrumbs.",
      email: "chinesecook@example.com",
      ingredients: [
        "Crab meat",
        "Breadcrumbs",
        "Egg",
        "Mayonnaise",
        "Lemon juice",
        "Dijon mustard",
        "Parsley"
      ],
      category: "Chinese",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726019148/my-recipes-folder/plgtu5eomsivs4rqzfim.jpg",
       instructions: "\n        Preheat the oven to 175ºC/gas 3. Lightly grease a 22cm metal or glass pie dish with a little of the butter.\n        For the pie crust, blend the biscuits, sugar and remaining butter in a food processor until the mixture resembles breadcrumbs.\n        Transfer to the pie dish and spread over the bottom and up the sides, firmly pressing down.\n        Bake for 10 minutes, or until lightly browned. Remove from oven and place the dish on a wire rack to cool.\n        For the filling, whisk the egg yolks in a bowl. Gradually whisk in the condensed milk until smooth.\n        Mix in 6 tablespoons of lime juice, then pour the filling into the pie crust and level over with the back of a spoon.\n        Return to the oven for 15 minutes, then place on a wire rack to cool.\n        Once cooled, refrigerate for 6 hours or overnight.\n        To serve, whip the cream until it just holds stiff peaks. Add dollops of cream to the top of the pie, and grate over some lime zest, for extra zing if you like.\n    \n        Source: https://www.jamieoliver.com/recipes/fruit-recipes/key-lime-pie/"
    },
    {
      name: "Grilled-lobster-rolls",
      description: "Classic lobster rolls with grilled lobster, served in buttery buns.",
      email: "tacochef@example.com",
      ingredients: [
        "Lobster",
        "Butter",
        "Lemon",
        "Celery",
        "Mayonnaise",
        "Hot dog buns"
      ],
      category: "Mexican",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726019237/my-recipes-folder/a8qdixmilmclwjpyj2ll.jpg",
      instructions: "\n        Remove the butter from the fridge and allow to soften.\n        Preheat a griddle pan until really hot.\n        Butter the rolls on both sides and grill on both sides until toasted and lightly charred (keep an eye on them so they don’t burn).\n        Trim and dice the celery, chop the lobster meat and combine with the mayonnaise. Season with sea salt and black pepper to taste.\n        Open your warm grilled buns, shred and pile the lettuce inside each one and top with the lobster mixture. Serve immediately.\n    \n        Source: https://www.jamieoliver.com/recipes/fruit-recipes/key-lime-pie/",
    },
    {
      name: "Southern-fried Chicken",
      description: "Crispy and juicy southern fried chicken with a flavorful seasoning blend.",
      email: "indiancook@example.com",
      ingredients: [
        "Chicken",
        "Flour",
        "Buttermilk",
        "Paprika",
        "Garlic powder",
        "Black pepper",
        "Salt",
        "Oil for frying"
      ],
      category: "Indian",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726018616/my-recipes-folder/sir8bsk5sktafhlav2pt.jpg",
      instructions: "\n        To make the brine, toast the peppercorns in a large pan on a high heat for 1 minute, then add the rest of the brine ingredients and 400ml of cold water. Bring to the boil, then leave to cool, topping up with another 400ml of cold water.\n    \n        Meanwhile, slash the chicken thighs a few times as deep as the bone, keeping the skin on for maximum flavour. Once the brine is cool, add all the chicken pieces, cover with clingfilm and leave in the fridge for at least 12 hours – I do this overnight.\n    \n        After brining, remove the chicken to a bowl, discarding the brine, then pour over the buttermilk, cover with clingfilm and place in the fridge for a further 8 hours, so the chicken is super-tender.\n    \n        When you’re ready to cook, preheat the oven to 190°C/375°F/gas 5.\n    \n        Wash the sweet potatoes well, roll them in a little sea salt, place on a tray and bake for 30 minutes.\n    \n        Meanwhile, make the pickle – toast the fennel seeds in a large pan for 1 minute, then remove from the heat. Pour in the vinegar, add the sugar and a good pinch of sea salt, then finely slice and add the cabbage. Place in the fridge, remembering to stir every now and then while you cook your chicken.\n    \n        Source: https://www.jamieoliver.com/recipes/chicken-recipes/southern-fried-chicken/",
    },
    {
      name: "Key-lime-pie",
      description: "A tangy and sweet key lime pie with a graham cracker crust.",
      email: "indiancook@example.com",
      ingredients: [
        "Key lime juice",
        "Condensed milk",
        "Egg yolks",
        "Graham cracker crust",
        "Whipped cream"
      ],
      category: "American",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726023050/my-recipes-folder/ryltoifsbswcrwmzk9tk.jpg"
    },
    {
      name: "Spring-rolls",
      description: "Crispy fried rolls filled with a mix of vegetables and noodles.",
      email: "indiancook@example.com",
      ingredients: [
        "Spring roll wrappers",
        "Carrots",
        "Cabbage",
        "Glass noodles",
        "Soy sauce",
        "Garlic",
        "Ginger"
      ],instructions: "Put your mushrooms in a medium-sized bowl, cover with hot water and leave for 10 minutes, or until soft. Meanwhile, place the noodles in a large bowl, cover with boiling water and leave for 1 minute. Drain, rinse under cold water, then set aside.\n        For the filling, finely slice the cabbage and peel and julienne the carrot. Add these to a large bowl with the noodles.\n    \n        Source: https://www.jamieoliver.com/recipes/vegetables-recipes/spring-rolls/",
      category: "Chinese",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726019469/my-recipes-folder/dhdie4nuumhjwnay8fns.jpg"
    },
    {
      name: "Stir-fried-vegetables",
      description: "A healthy and colorful mix of vegetables stir-fried with soy sauce and garlic.",
      email: "indiancook@example.com",
      ingredients: [
        "Broccoli",
        "Bell peppers",
        "Carrots",
        "Mushrooms",
        "Soy sauce",
        "Garlic",
        "Sesame oil"
      ],
      category: "Indian",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726023158/my-recipes-folder/vefcyy3doqvutpbafrxl.jpg",
      instructions: "Crush the garlic and finely slice the chilli and spring onion. Peel and finely slice the red onion, and mix with the garlic, chilli and spring onion.\n        Shred the mangetout, slice the mushrooms and water chestnuts, and mix with the shredded cabbage in a separate bowl to the onion mixture.\n        Heat your wok until it’s really hot. Add a splash of oil – it should start to smoke – then the chilli and onion mix. Stir for just 2 seconds before adding the other mix. Flip and toss the vegetables in the wok if you can; if you can’t, don’t worry, just keep the vegetables moving with a wooden spoon, turning them over every few seconds so they all keep feeling the heat of the bottom of the wok. Season with sea salt and black pepper.\n    \n        Source: https://www.jamieoliver.com/recipes/vegetables-recipes/stir-fried-vegetables/",
    },
    {
      name: "Thai-Pinch salad",
      description: "A refreshing Thai salad with fresh greens, herbs, and a tangy lime dressing.",
      email: "indiancook@example.com",
      ingredients: [
        "Mixed greens",
        "Cilantro",
        "Mint",
        "Cucumber",
        "Peanuts",
        "Lime juice",
        "Fish sauce"
      ],
      category: "Thai",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726019621/my-recipes-folder/sj8pdwonkoxnl64pmoaq.jpg",
      instructions: "Peel and very finely chop the ginger and deseed and finely slice the chilli (deseed if you like). Toast the sesame seeds in a dry frying pan until lightly golden, then remove to a bowl.\n        Mix the prawns with the five-spice and ginger, finely grate in the lime zest and add a splash of sesame oil. Toss to coat, then leave to marinate.\n    \n        Source: https://www.jamieoliver.com/recipes/seafood-recipes/asian-pinch-salad/"
    },
    {
      name: "Thai-Green-Curry",
      description: "A fragrant and spicy Thai green curry with chicken and vegetables.",
      email: "indiancook@example.com",
      ingredients: [
        "Chicken",
        "Coconut milk",
        "Green curry paste",
        "Eggplant",
        "Bamboo shoots",
        "Basil",
        "Fish sauce"
      ],
      category: "Thai",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726019702/my-recipes-folder/qvvbjvhye2vdk8bsbym5.jpg",
      instructions:"Preheat the oven to 180ºC/350ºF/gas 4.\n        Wash the squash, carefully cut it in half lengthways and remove the seeds, then cut into wedges. In a roasting tray, toss with 1 tablespoon of groundnut oil and a pinch of sea salt and black pepper, then roast for around 1 hour, or until tender and golden.\n        For the paste, toast the cumin seeds in a dry frying pan for 2 minutes, then tip into a food processor.\n        Peel, roughly chop and add the garlic, shallots and ginger, along with the kaffir lime leaves, 2 tablespoons of groundnut oil, the fish sauce, chillies (pull off the stalks), coconut and most of the coriander (stalks and all).\n        Bash the lemongrass, remove and discard the outer layer, then snap into the processor, squeeze in the lime juice and blitz into a paste, scraping down the sides halfway.\n        Put 1 tablespoon of groundnut oil into a large casserole pan on a medium heat with the curry paste and fry for 5 minutes to get the flavours going, stirring regularly.\n        Tip in the coconut milk and half a tin’s worth of water, then simmer and thicken on a low heat for 5 minutes.\n    \n        Source: https://www.jamieoliver.com/recipes/butternut-squash-recipes/thai-green-curry/",
    }, 
    
    {
      name: "Tom-daley",
      description: "A flavorful seafood stew with shrimp, fish, and fragrant herbs.",
      email: "indiancook@example.com",
      ingredients: [
        "Shrimp",
        "White fish",
        "Garlic",
        "Tomatoes",
        "Thyme",
        "Bay leaves",
        "Lemon"
      ],
      category: "Mexican",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726020262/my-recipes-folder/x14q8xb8cxpdaq5a1qge.jpg",
      instructions:"Preheat the oven to 180ºC/350ºF/gas 4.\n        Wash the squash, carefully cut it in half lengthways and remove the seeds, then cut into wedges. In a roasting tray, toss with 1 tablespoon of groundnut oil and a pinch of sea salt and black pepper, then roast for around 1 hour, or until tender and golden.\n        For the paste, toast the cumin seeds in a dry frying pan for 2 minutes, then tip into a food processor.\n        Peel, roughly chop and add the garlic, shallots and ginger, along with the kaffir lime leaves, 2 tablespoons of groundnut oil, the fish sauce, chillies (pull off the stalks), coconut and most of the coriander (stalks and all).\n        Bash the lemongrass, remove and discard the outer layer, then snap into the processor, squeeze in the lime juice and blitz into a paste, scraping down the sides halfway.\n        Put 1 tablespoon of groundnut oil into a large casserole pan on a medium heat with the curry paste and fry for 5 minutes to get the flavours going, stirring regularly.\n        Tip in the coconut milk and half a tin’s worth of water, then simmer and thicken on a low heat for 5 minutes.\n    \n        Source: https://www.jamieoliver.com/recipes/butternut-squash-recipes/thai-green-curry/",
    },
    {
      name: "Thai Red chicken Soup",
      description: "A fragrant and spicy Thai red curry chicken soup with coconut milk.",
      email: "indiancook@example.com",
      ingredients: [
        "Chicken",
        "Coconut milk",
        "Red curry paste",
        "Lemongrass",
        "Galangal",
        "Fish sauce",
        "Lime"
      ],
      category: "Thai",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726020076/my-recipes-folder/zhazlaspxely9up4hwed.jpg",
      instructions: "\n        Sit the chicken in a large, deep pan.\n        Carefully halve the squash lengthways, then cut into 3cm chunks, discarding the seeds.\n        Slice the coriander stalks, add to the pan with the squash, curry paste and coconut milk, then pour in 1 litre of water. Cover and simmer on a medium heat for 1 hour 20 minutes.\n        Use tongs to remove the chicken to a platter. Spoon any fat from the surface of the soup over the chicken, then sprinkle with half the coriander leaves.\n        Serve with 2 forks for divvying up the meat at the table. Use a potato masher to crush some of the squash, giving your soup a thicker texture.\n    \n        Source: https://www.jamieoliver.com/recipes/chicken-recipes/thai-red-chicken-soup/",
  email: "hello@email.com",
    },
    {
      name: "Thai-inspired Vegetable-broth",
      description: "A hearty vegetable broth infused with Thai spices and herbs.",
      email: "indiancook@example.com",
      ingredients: [
        "Vegetable stock",
        "Carrots",
        "Mushrooms",
        "Lemongrass",
        "Ginger",
        "Garlic",
        "Cilantro"
      ],
      category: "Thai",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726019794/my-recipes-folder/wua2xqmywi6rfbslkwh2.jpg",
      instructions: "\n        Sit the chicken in a large, deep pan.\n        Carefully halve the squash lengthways, then cut into 3cm chunks, discarding the seeds.\n        Slice the coriander stalks, add to the pan with the squash, curry paste and coconut milk, then pour in 1 litre of water. Cover and simmer on a medium heat for 1 hour 20 minutes.\n        Use tongs to remove the chicken to a platter. Spoon any fat from the surface of the soup over the chicken, then sprinkle with half the coriander leaves.\n        Serve with 2 forks for divvying up the meat at the table. Use a potato masher to crush some of the squash, giving your soup a thicker texture.\n    \n        Source: https://www.jamieoliver.com/recipes/chicken-recipes/thai-red-chicken-soup/",
  email: "hello@email.com",
    },
    {
      name: "Veggie-Pad",
      description: "A light and refreshing vegetable stir-fry with Thai seasonings.",
      email: "indiancook@example.com",
      ingredients: [
        "Mixed vegetables",
        "Soy sauce",
        "Lime juice",
        "Garlic",
        "Chili flakes",
        "Rice noodles"
      ],
      category: "Thai",
      image: "https://res.cloudinary.com/dvmqxb8kd/image/upload/v1726020351/my-recipes-folder/hazqrxrca5bqpyfsye14.jpg",
      instructions: "\n        Cook the noodles according to the packet instructions, then drain and refresh under cold running water and toss with 1 teaspoon of sesame oil.\n        Lightly toast the peanuts in a large non-stick frying pan on a medium heat until golden, then bash in a pestle and mortar until fine, and tip into a bowl.\n        Peel the garlic and bash to a paste with the tofu, add 1 teaspoon of sesame oil, 1 tablespoon of soy, the tamarind paste and chilli sauce, then squeeze and muddle in half the lime juice.\n        Peel and finely slice the shallot, then place in the frying pan over a high heat. Trim, prep and slice the crunchy veg, as necessary, then dry-fry for 4 minutes, or until lightly charred (to bring out a nutty, slightly smoky flavour).\n    \n        Source: https://www.jamieoliver.com/recipes/vegetable-recipes/veggie-pad-thai/",
    }
];

module.exports = recipes;
