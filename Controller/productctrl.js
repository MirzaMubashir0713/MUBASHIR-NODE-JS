function getall(req,res){
    res.status(200);
    const products=
    [
        {
            brand:"apple",
            model:"iphone 11",
            price:700,
            instock:true,
            discount:5
        },
        {
            brand:"apple",
            model:"iphone12",
            price:800,
            instock:true,
            discount:7
        },
        {
            brand:"apple",
            model:"iphone 13",
            price:900,
            instock:false,
            discount:3
        }];
    res.json(products);
};

module.exports=getall;