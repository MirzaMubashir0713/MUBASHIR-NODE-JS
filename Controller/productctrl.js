const Product=require("./../Models/productmodels");

const getall=async (req,res)=>{
    try{
        const data =await Product.find({},{__v:0});
        res.status(200);
        res.json(data);
    }catch(err){
        res.status(500);//internal server error 
        res.send("internal server error");
    }
};

// Create
const post=async (req,res)=>{
    const body=req.body;
    body.createddate =new Date();
    body.updateddate =new Date();
    const product=new Product(body);
    await product.save();
    res.status(201);
    res.send(" successfully created ");
};
// GETBYid
const getById=async (req,res)=>{
    try{
        const id=req.params.id;
        const data =await Product.findOne({_id:id},{__v:0});
        res.status(200);
        res.json(data);
    }catch(err){
        res.status(500);
        res.send("internal server error");
    }
}
// DELETE 
const remove = async(req,res)=>{
    try
    {
        const id=req.params.id;
        await Product.delete();
        res.status(204);
        res.send();
    }catch(err){
        res.status(500);
        res.send("invalid server error ");
    }
}
// PUT UPDATE 
const Update=async(req,res)=>{
    try{
        const id=req.params.id;
        const payload=req.body;
        await Product.updateOne({_id:id},payload);
        res.status(204);
        res.send();
    }catch(err){
        res.status(500);
        res.send("invalid server error");
    }
}
// PATCH PARTICIALLY Update
const Patch=async(req,res)=>{
    const id=req.params.id;
    const payload=req.body;
    const Updateobj={};
    for(let key in payload){
        Updateobj[key]=payload[key];
    }
    await Product.updateOne({_id:id},{$set:Updateobj});
    res.status(204);
    res.send();
}
module.exports={
    getall,
    post,
    getById,
    remove,
    Update,
    Patch
};