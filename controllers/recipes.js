const RecipeModel = require('../models/recipe');



module.exports = {
    new: newRecipe,
    index,
    show,
    create,
    edit
}

async function edit(req, res) {
    const recipe = await RecipeModel.findOne({_id: req.params.id});
    console.log(recipe);
    if (!recipe) return res.redirect('/recipes');
    res.render('recipes/edit', { recipe });
  }

function create(req, res){
    console.log(req.body)
    
    RecipeModel.create(req.body)
        .then(function(dbRecipes){
            console.log(dbRecipes)
            res.redirect(`recipes/${dbRecipes._id}`);
        }).catch((err) => {
            console.log(err, "create func.")
        })
    }


function show(req, res) {
	
	RecipeModel.findById(req.params.id)
                .then(function(recipeDoc){
                    console.log(recipeDoc)
                    res.render('recipes/show', {
                        recipe: recipeDoc
                    }) 
                })
}


function index(req, res){

	//  the empty object {} is called a
	// query object, mongoose
	RecipeModel.find({})
	    .then(function(allRecipes){

		console.log(allRecipes, " <_ data from the db")
				// respond to the client in the .then, we have to wait 
				// for the data to come back from the database
		    res.render('recipes/index', {recipes: allRecipes})
	        }).catch(function(err){
		        console.log(err);
				res.send(err)
			  })

	
}



function newRecipe(req, res){
    // Render looks in the views folder
	res.render('recipes/new')
}