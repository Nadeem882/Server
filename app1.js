const express = require("express")

const app = express()
app.use(express.json())

const notes = []

app.post("/notes", (req,res) => {
    console.log(req.body)
})
>> OP : { title: title ,
        description : description } this will print in the vs terminal 

app.post("/notes", (req,res) => {
    notes.push(req.body)
    res.status(201),json( {
        message : "Notes created successfully"
    })
})
>>OP : "Notes created successfully"
        { title: title ,
        description : description } this will print in the postman terminal

app.patch('/notes/:index',(req,res) => {

    const index = req.param.index
    const description = req.body.description

    notes [index].description = description

    res.status(202),json({
        message : "notes updated successfully"
    })
})

app.delete('/notes/:index' ,(req,res)=> {

    const index = req.params.index
    delete notes [index]   
    res.status(202),json({
        message : "notes deleted successfully"
    })
} )
