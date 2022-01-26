const path=require('path')
const express =require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const app=express()

//Define paths for express config
const publicDirectoryPath=path.join(__dirname,"../public")
const viewsPath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")

//Setup handlebars engine and views location
app.set("view engine","hbs")
//app.set("views",path.join(__dirname,'../views'))
app.set("views",viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get("",(req,res)=>{
    res.render("index",{
        title:"Weather App",
        name:"Dimpy Modi"
    })

})

app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About me",
        name:"Dimpy Modi"
    })
})

app.get("/help",(req,res)=>{
    res.render("help",{
        helpText:"This is the help page",
        title:"Help Page",
        name:"Dimpy Modi"
    })
})
app.get("",(req,res)=>{
    res.send("Hello user")

})

app.get("/help",(req,res)=>{
    res.send("Help page")
})

app.get("/about",(req,res)=>{
    res.send("<h1>About page</h1>")
})

app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send({error})
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({
                error:"Wrong address"
            })
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address
            })

        })
    }

    )
    
})

app.get("/products",(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:"You must provide a search term"
        })
    }
})

app.get("/help/*",(req,res)=>{
    res.render("404",{
        title:"404",
        name:"Dimpy Modi",
        errorMessage:"Help page not found"
    })
})

app.get("*",(req,res)=>{
    res.render("404",{
        title:"404",
        name:"Dimpy Modi",
        errorMessage:"Page Not Found"
    })
})


app.listen(3000,()=>{
    console.log("Server is up and running in port 3000")
})