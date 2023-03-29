const RecipeModel = require('../models/recipe');


module.exports = {
    new: newRec,
    create,
    delete: deleteRec
}

function deleteRec(req, res){

    RecipeModel.findOne({
        'recommendations._id': req.params.id, 
        'recommendations.userId': req.user._id
        
    }).then(function(recipeDoc){
        console.log(recipeDoc);
        if(!recipeDoc) return res.redirect(`/recipes/${recipeDoc._id}`);


        recipeDoc.recommendations.remove(req.params.id);

        recipeDoc.save().then(function(){
            res.redirect(`/recipes/${recipeDoc._id}`)
        })
    }).catch(err => {
        console.log(err);
        res.send(err);
    })
}


function create(req, res){
    console.log(req.body)
    RecipeModel.findById(req.params.id)
        .then(function(recipeDoc){
            console.log(recipeDoc, "This is the recipe doc")
            req.body.userId = req.user._id
            req.body.userName = req.user.name
            recipeDoc.recommendations.push(req.body);
            
            

             recipeDoc.save()
            .then(function(){
                res.redirect(`/recipes`)
            })
        }).catch(err =>{
            console.log(err, "rec error");
            res.send(err)
        })
}

function newRec(req, res){
    // const rec = RecommendationModel.findById(req.params.id)
    res.render('recommendations/new')
}