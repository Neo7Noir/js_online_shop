require("dotenv").config()
const express = require("express")
const db = require("./models")
const router = require("./routes/baseRoutes") 

const app = express()

app.use(express.json())
app.use(router)

PORT = process.env.port

db.sequelize.sync().then((req) => {
    console.log("Connected to MySql server")
    app.listen(PORT, () => {
        console.log(`listening on: http://localhost:${PORT}`)
    })
})