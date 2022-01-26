const request=require('request')

const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiZGltcHk3IiwiYSI6ImNreDdvOTR5ejM0cG0ycHFyaWJndnBya2UifQ.CJwUuWg6aV5XLbGX1uIMmw&limit=1"

    request({url,json:true},(error,{body})=>{
        if(error){
            callback("Unable to connect to location services",undefined)

        }
        else if(body.features.length===0){
            callback("Location is not valid",undefined)

        }
        else {
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    }
    )

}



module.exports=geocode