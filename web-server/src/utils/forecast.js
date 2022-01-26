const request=require('request')


const forecast=(latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=d85f34ed55d2387ba8cace8b153d7adf&query="+latitude+","+longitude
    //console.log(url)
    request({url,json:true},(error,{body})=>{
        if(error){
            callback("Unable to connect to weather services",undefined)

        }
        else if(body.error){
            callback("The location is invalid",undefined)
        } else {
            callback(undefined,{
            //place:response.location.name,
            temp:body.current.temperature,
            feelslike:body.current.feelslike,
            description:body.current.weather_descriptions[0],
            place:body.location.name,
            state:body.location.region
        })
    }

    })

}

module.exports=forecast
