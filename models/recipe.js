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
        default: new Date().setFullYear(new Date().getFullYear())
    }},
    {
      timestamps: true
    });


const recipeSchema = new mongoose.Schema({
      // All this code is
      // mongoose Schema code,
      // Field types in Mongoose Schemas? google
    title: {
        type: String
    },
    recommendations: [recommendationSchema], // One Movie HAS MANY reviews, Using embedding in Mongoose
    ingredients: String,
    instructions: String,
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
        default: new Date().setFullYear(new Date().getFullYear())
    }
},
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Recipe", recipeSchema);