var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/AngularProductManager');

const ProductSchema = new mongoose.Schema({
    title:{type:String, minlength:[3, "Title must be at least 3 characters long."]},
    price:{type:Number, required:[true, "Please enter the product's price."], min:[.01, "Price must be a positive number"]},
    imgUrl:{type:String},
}, {timestamps:true})

//come back to validations: https://mongoosejs.com/docs/validation.html


module.exports = mongoose.model('Products', ProductSchema)