const RecommendationModel = require('../models/recipe');

module.exports = {
    create
}

function create(req, res){
    console.log(req.body)
    RecommendationModel.findById(req.params.id)
        .then(function(recipeDoc){
            console.log(recipeDoc)
            recipeDoc.recommendations.push(req.body);

            recipeDoc.save()
            .then(function(){
                res.redirect(`/recipes/${req.params.id}`)
            })
        }).catch(err =>{
            console.log(err);
            res.send(err)
        })
}