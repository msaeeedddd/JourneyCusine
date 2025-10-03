const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

const auth = require("./routes/auth.js")
const house = require("./routes/house.js")
const reservations = require("./routes/reservations.js")

require('dotenv').config();


const app = express();

// parse Data
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/auth", auth);
app.use("/house", house);
app.use("/reservations", reservations)


async function main() {
    await mongoose.connect(`mongodb://localhost:27017/motel`)
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
        console.log('MongoDB connected By Mongo Client Saeed!')
    } catch (err) {
        console.log(err)
    }
}

app.get('/',(req,res)=>{
    res.send(` Hello Express is server Working on ${process.env.PORT}`);
})

main();