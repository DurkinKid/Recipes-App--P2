const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
      // All this code is
      // mongoose Schema code,
      // Field types in Mongoose Schemas? google
    title: {
        type: String,
        required: true,
    },
    // recommendations: [recommendationSchema], // One Movie HAS MANY reviews, Using embedding in Mongoose
        ingredients: String,
        instructions: String,
      // ref 'Performer' comes from the name of the Performer model
      //  mongoose.model('Performer', performerSchema); <-- "Performer" is the name of the model
      // in mongodb the Performer becomes performers
      
      // referencing. 
    cookTime: { 
        type: Number,
        min: [1],
        max: [999]
    },
    glutenFree:{
        type: Boolean,
        enum: ['T', 'F'],
        default: 'F'
    }
},
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Recipe", recipeSchema);