require("dotenv").config();
const cors = require("cors")
const express = require("express")
const dbconnect = require("./configs/db")

const airportController = require("./controllers/airport.controller")
const flightController = require("./controllers/flights.controller")

const app = express();
app.use(cors())
app.use(express.json())

app.use("/airport", airportController);
app.use("/flights", flightController);


app.listen(process.env.PORT||8080,async ()=>{
    try{
        await dbconnect();
        console.log("listening on port 8080")
        
    }
    catch(er){
        console.log(er)
    }
})