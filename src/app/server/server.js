/**
 * Created by kaylo on 5/16/2017.
 */
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/jetbrains');

mongoose.model('Product', {name:String});

var product = new Product({name: "WebStorm"});
product.save(function(err){
if(err){
  console.log('failed');
}else{
  console.log('saved');
}
})
