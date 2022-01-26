const fs=require('fs')

const book={
    title:"Ego is the Enemy",
    author:"Ryan Holiday"

}

const bookJSON=JSON.stringify(book)
console.log(bookJSON)

book2=JSON.parse(bookJSON)
console.log(book2.author)

fs.writeFileSync("1-json.json",bookJSON)


const dataBuffer=fs.readFileSync("1-json.json")
const data=dataBuffer.toString()
finaldata=JSON.parse(data)
finaldata.name="Dimpy"
finaldata.age=24
console.log(finaldata)
fs.writeFileSync("1-json.json",JSON.stringify(finaldata))
