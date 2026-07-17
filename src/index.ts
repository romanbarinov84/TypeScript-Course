
type Product = {
    id:number;
    title:string;
    price:number;
}

function parseJson(text:string):unknown {
    return JSON.parse(text)
}


const col= `{
    "id":42,
    "title":"subscribe",
    "price":1948.34
}`

console.log(parseJson(col));
