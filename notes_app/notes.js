const fs=require('fs')
const chalk=require('chalk')
const getNotes=()=>{
    return "Your notes...."
}
const addNote=(title,body)=>{
    //console.log("Inside addNote")
    const notes=loadNotes()

    duplicateNote=notes.find((note)=>note.title===title)

    if(!duplicateNote){

        notes.push({
            title:title,
            body:body
        })
        console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse("New node is added"))
    
    }
    else{
        console.log(chalk.red.inverse("The title is already taken"))
    }
    
}

const removeNote=(title)=>{
    console.log("Inside the removeNote function")
    const notes=loadNotes()
    console.log("Hello")
    n=notes.filter((note)=>note.title!==title)
    if (n.length===notes.length){
        console.log(chalk.red.inverse("No note found"))
    } else {
        console.log(chalk.green.inverse("Note removed"))
        saveNotes(n)
    }


    
}

const listNotes=()=>{
    
    const notes=loadNotes()
    notes.forEach((note)=>{
        console.log(chalk.magenta(note.title))
        console.log(chalk.cyan(note.body))
    })

}

const readNote=(title)=>{
    const notes=loadNotes()
    note=notes.find((note)=>note.title===title)
    if(note){
        console.log(chalk.magenta.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse("The note does not exist"))
    }

}

const saveNotes=(notes)=>{
    dataJSON=JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)

}

const loadNotes=()=>{
    try{
    dataBuffer=fs.readFileSync('notes.json')
    dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }

}
module.exports={
    p1:getNotes,
    p2:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}