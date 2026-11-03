const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+s??????")

    console.log("Connected to DB")
}

module.exports = connectDB
