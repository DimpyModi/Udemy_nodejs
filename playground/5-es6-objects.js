//Object Property shorthand



const name="Andrew"
const userAge=27

const user={
  //  name:name,
    name,
    age:userAge,
    location:"Philadelphia"

}

console.log(user)




//Object destructuring

const product={
    label:"Red Notebook",
    price:3,
    stock:201,
    salePrice:undefined
}

const {label:productLabel,stock,rating=0}=product
//console.log(label)
console.log(productLabel)
console.log(product.label)
console.log(rating)


const transaction=(type,{label,stock})=>{
    console.log(type,label,stock)

}

transaction("order",product)
const greet=(name)=>{
    console.log("Hello "+name)
}

greet()