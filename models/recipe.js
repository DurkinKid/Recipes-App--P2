const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({   
      userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
      userName: String,
      newIngred: String,
      newInstruct: String,
      newHours: { 
        type: Number,
        min: 0,
        max: 500
      },
      newMins: {
        type: Number,
        min: 1,
        max: 500
      },
      isGF: Boolean,
      recDate: {
        type: Date,
        default: new Date().setFullYear(new Date().getFullYear() + 1)
    }},
    {
      timestamps: true
    });


const recipeSchema = new mongoose.Schema({
      // All this code is
      // mongoose Schema code,
      // Field types in Mongoose Schemas? google
    title: {
        type: String,
        required: true,
    },
    recommendations: [recommendationSchema], // One Movie HAS MANY reviews, Using embedding in Mongoose
    ingredients: String,
    instructions: String,
      // ref 'Performer' comes from the name of the Performer model
      //  mongoose.model('Performer', performerSchema); <-- "Performer" is the name of the model
      // in mongodb the Performer becomes performers
      
      // referencing. 
    hours: { 
        type: Number,
        min: 0,
        max: 500
      },
    mins: {
        type: Number,
        min: 1,
        max: 500
    },
    glutenFree: Boolean,
    date: {
        type: Date,
        default: new Date().setFullYear(new Date().getFullYear() + 1)
    }
},
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Recipe", recipeSchema);