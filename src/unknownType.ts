
type Product = {
    id:number;
    title:string;
    price:number;
}

function fail(message:string):never{
    throw new Error("message")
}

function isRecord(value:unknown):value is Record<string , unknown>{
    return typeof value === "object" && value !== null
}

function parseProduct(value:unknown):Product{
    if(!isRecord(value)){
        return  fail("Product must be an object")
    }

    if(typeof value.id !== "number"){
        return fail("Product.id must be a number")
    }
    if(typeof value.title !== "string"){
        return fail("Product.title must be a string ")
    }
    if(typeof value.price !== "number"){
        return fail("Product.price must be a number")
    }

    return {
        id:value.id,
        title:value.title,
        price:value.price
    }
}

function parseJson(text:string):unknown{
    return JSON.parse(text)
}

const raw = parseJson(`{"id":1,"title":"key","price":7500}`);
const product = parseProduct(raw);

console.log(product.title);
