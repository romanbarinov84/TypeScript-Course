
type Product = {
    id:number;
    title:string;
    price:number;
}


type OrderItem = {
    product:Product;
    quantity:number;
}

type Delivery = 
    | {method:"courier";address:string;price:number}
    | {method:"pickup"; pickupPointId:number;price:0};


type Order = {
    id:number;
    status:"draft"|"paid"|"cancelled";
    items:OrderItem[];
    delivery:Delivery;
    promocode?: string
}

function calculateItemsTotal(items:OrderItem[]):number {
    return items.reduce((total,item) => total + item.product.price*item.quantity,0)
}

function calculateOrderTotal(order:Order):number {
    return calculateItemsTotal(order.items) + order.delivery.price
}

const order:Order = {
    id:101,
    status:"draft",
    items:[
        {
            product:{
                id:1,
                title:"sound box",
                price:7500,
            },
            quantity:2
        },
    ],
    delivery:{
        method:"courier",
        address:"Brovary",
        price:500,
    }
}

console.log(calculateOrderTotal(order));
