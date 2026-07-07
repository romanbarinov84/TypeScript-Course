
type Product = {
    id:number;
    title:string;
    price:number;
};

function formatProduct(product:Product){
    return `${product.title} : ${product.price}`
};

