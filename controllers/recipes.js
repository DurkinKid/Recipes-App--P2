const RecipeModel = require('../models/recipe');



module.exports = {
    new: newRecipe,
    index,
    show
}

function show(req, res) {
	
	RecipeModel.findById(req.params.id)
              .populate('cast')
			  .exec() // to execute the populate
			  .then(function(recipeDoc){
				console.log(recipeDoc) // <- movieDoc is the object from the database!

				// Goal: TO find all of the Performers that are not in the movies cast array
				// 1. find the movie (movieDoc) so we know what performers are in the cast array
				// 2. Use the PerformerModel to query the performers collection to find all the performers
				// whose id is not in the movieDoc.cast array


				// PerformerModel.find(
				// 	{_id: {$nin: movieDoc.cast}} // find all the performers that are not in ($nin) the movieDoc.cast array
				// ).then(function(performersNotInMovie){
				// 	res.render('movies/show', { 
				// 		movie: movieDoc, // this has the cast array, the performers in the movie
				// 		performersNotInMovie // this is for our dropdown menu
				// 	});
				// })



				
			  }).catch((err) =>{
				console.log(err);
				res.send(err)
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