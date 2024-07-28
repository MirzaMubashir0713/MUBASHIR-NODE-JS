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
    for(let i=0;i<products.length;i++){
        if(products[i].id===id){
            products.splice(i,1);
            break;
        }
    };
    res.status(204) //no content
    res.send();
}
function isValid(payload){
    return payload.brand&&payload.model&&payload.price&&payload.instock&&payload.discount;
}
function create(req,res){
    const payload=req.body;
    if(isValid(payload)){
        products.push(payload);
        res.status(201);//created
        res.send("successfully created");
    }else{
        res.status(400);
        res.send("invalid iutput")
    }
}
function update(req,res){
    const id=+req.params.id;
    const payload=req.body;
    if(!isValid(payload)){
        res.status(400);
        res.send("invalid input");
    }else{
    for(let i=0;i<products.length;i++){
        if(products[i].id===id){
            products[i].brand=payload.brand;
            products[i].model=payload.model;
            products[i].price=payload.price;
            products[i].instock=payload.instock;
            products[i].discount=payload.discount;
        }
    }
        res.status(200);
        res.send();
    }
}
function patch(req,res){
    const id=+req.params.id;
    const payload=req.body;
    // for(let i=0;i<products.length;i++){
    //     if(products[i].id===id){
    //         //IF YOU ARE ASSINGING THE OBJECT TO THE VARAIBLE IT DOESNOT CLONE IT GET REFRENCES
    //         const product=products[i]//REFRENCING TYPE
    //         for(let key in payload){
    //             product[key]=payload[key];
    //         }
    //     }
    // }
    const product=products.find(elem=>elem.id===id);
    if(!product){
        res.status(404);
        res.send("not found");
    }
    else{
    for(let key in payload){
        product[key]=payload[key];
    }
    res.status(200);
    res.send();
    }
}
module.exports={
    getall,
    getById,
    remove,
    create,
    update,
    patch
};