const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')

const noteUtils=require('./notes.js')





//Add command
yargs.command({
    command:"add",
    describe:"This is to add a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body: {
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        noteUtils.p2(argv.title,argv.body)
    }
})



//Remove command
yargs.command({
    command:"remove",
    describe:"This is to remove a note",

    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
        

    },
    handler(argv){
        noteUtils.removeNote(argv.title)
        console.log("Removing note",argv.title)
    }
})

//List command
yargs.command({
    command:"list",
    describe:"This is to list a note",
    handler(){
        
        console.log(chalk.yellow.inverse("Your notes"))
        noteUtils.listNotes()

    }
})

//Read command
yargs.command({
    command:"read",
    describe:"This is to read a note",
    builder: {
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        noteUtils.readNote(argv.title)
        
    }
})

yargs.parse()