const mongoose=require("mongoose");
const schema=new mongoose.Schema(
    {
        brand:String,
        model:String,
        price:Number,
        inStock:Boolean,
        discount:Number,
        createddate:Date,
        updateddate:Date,
    });

module.exports=mongoose.model("products",schema);