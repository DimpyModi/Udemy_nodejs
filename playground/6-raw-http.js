const http=require("http")
const url="http://api.weatherstack.com/current?access_key=d85f34ed55d2387ba8cace8b153d7adf&query=45,90"

const request=http.request(url,(response)=>{
    let data=""
    response.on("data",(chunk)=>{
        data=data+chunk.toString()

    })
    response.on("end",()=>{
        const body=JSON.parse(data)
        console.log(body)

    })
})
request.on("error",(error)=>{
    console.log("An error",error)
}
)
request.end()