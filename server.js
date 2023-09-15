const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/mongoose",
    () => {
        console.log("mongoose connected")
    }, (err) => {
        console.log("connect to db Failed")
    })
