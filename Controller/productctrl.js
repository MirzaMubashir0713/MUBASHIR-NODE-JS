const products=
[
    {
        id:1,
        brand:"apple",
        model:"iphone 11",
        price:700,
        instock:true,
        discount:5
    },
    {
        id:2,
        brand:"apple",
        model:"iphone12",
        price:800,
        instock:true,
        discount:7
    },
    {
        id:3,
        brand:"apple",
        model:"iphone 13",
        price:900,
        instock:false,
        discount:3
    }];
function getall(req,res){
    res.status(200);
    res.json(products);
};
function getById(req,res){
    const id=+req.params.id;
    let product;
    for(let i=0;i<products.length;i++){
        if(products[i].id===id){
            product=products[i];
        }
    }
    if(product){
        res.status(200);
        res.json(product);
    }else{
        res.status(404);
        res.send("not found");
    }
    
}
function remove(req,res){
    const id=+req.params.id;
    let product;
    for(let i=0;i<products.length;i++){
        if(products[i].id===id){
            products.splice(i,1);
        }
    }
    res.status(204) //no content
    res.send();
}

module.exports={
    getall,
    getById,
    remove
};