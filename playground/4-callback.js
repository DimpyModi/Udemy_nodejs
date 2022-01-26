const add=(a,b,callback)=>{
    setTimeout(()=>{
        const total=a+b
        callback(total)

    },2000)
}

add(1,4,(sum)=>{
    console.log(sum)
})