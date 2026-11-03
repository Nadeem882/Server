const express = require("express")
const noteModel = require("./models/note.model")
const app = express()

app.use(express.json())

app.post("/notes", async (req,res) => {

    const data = req.body
    await noteModel.create({
        title: data.title ,
        description : data.description
    })

    res.status(200).json({
        message :" note created"
    })
})

app.get ("/notes", async(req , res) => {

    const notes = await noteModel.find({
        //title : "title" // use findOne > to find exact title from database 
    })

    res.status(200).json({
        message : "Notes fetched " ,
        notes: notes
    })

})

app.delete("/notes/:id", async (req,res) => {

    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id : id
    }) 

    res.status(200).json({
        message : "Notes deleted successfully"
    })
})
