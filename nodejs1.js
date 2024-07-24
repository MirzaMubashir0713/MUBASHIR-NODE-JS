const http = require("http");
const fs=require("fs");
const handler=(req,res)=>{
    switch(req.url)
    {
        case "/" :   
            const content=fs.readFileSync("./index.html");
            res.write(content); 
            res.end();
            break;
        case "/books" :
            res.write("list  of books ");
            res.end();
            break;
        case "/products":
            const products =
            [
                {
                    brand : "apple",
                    model : "iphone11",
                    price : 8000,
                    instock : true,
                    discount : 5
                },
                {
                    brand : " apple ",
                    model : "iphone 12",
                    price : 9000,
                    instock : true,
                    discount : 7,
                },
                {
                    brand : " apple ",
                    model : "iphone 13",
                    price : 10000,
                    instock: false,
                    discount:5,
                },
                {
                    brand : " apple ",
                    model : " iphone 14",
                    price : 12000,
                    instock : true ,
                    discount : 8
                }
            ];
            // serialization 
            res.write(JSON.stringify(products));
            res.end();
            break;
            default:
                res.write("not found");
                res.end();
                break;     
    };
};
const server =http.createServer(handler);
const port=3000;
server.listen(port,()=>console.log("server is ruuning on 3000 port!!!!"));


