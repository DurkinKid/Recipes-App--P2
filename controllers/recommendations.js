const RecommendationModel = require('../models/recipe');

module.exports = {
    new: newRec,
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

function newRec(req, res){
    res.render('recommendations/new')
}