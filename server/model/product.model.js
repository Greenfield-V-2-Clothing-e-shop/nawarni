const mongoose = require('mongoose')


var productModel=mongoose.Schema({
    Product:{type:String,required:true},
    Category:{type:String,required:true},
    Description:{type:String},
    ImageUrl:{type:String},
    Price:{type:String,required:true},  

})

module.exports= mongoose.model('products',productModel);
