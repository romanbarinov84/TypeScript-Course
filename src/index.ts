type Product = {
    id:number;
    title:string;
    price:number;
}

type OrderItems = {
    product:Product;
    quantity:number;
}

type Delivery = 
|{method:"courier",address:string;price:number}
|{method:"pickup";pickupPointId:number;price:0};

type Order = {
    id:number;
    status:"draft"|"paid"|"cancelled";
    items:OrderItems[];
    delivery:Delivery;
    promocode?:string;
}