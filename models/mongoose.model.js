const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
 
    strDrink: {
    type: String,
    required: true
  },
  strDrinkThumb: {
    type: String,
  }
});

// This creates our model from the above schema, using mongoose's model method
const userModel = mongoose.model("Product", ProductSchema);

// Export the Article model
module.exports = userModel;