const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://nadeem:nadeem@nadeem.xrc3fzp.mongodb.net/ethan")

    console.log("Connected to DB")
}

module.exports = connectDB