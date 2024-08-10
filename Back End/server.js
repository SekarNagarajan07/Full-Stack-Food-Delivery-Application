import cors from "cors"
import express from "express"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


//app config

const app = express()
const port = 4000

//middleware configuration

app.use(express.json())
app.use(cors())

//db connection
connectDB()

// api endpoints

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))

app.get("/", (req, res) => {
  res.send("API Working")
})

app.listen(port, () => {
  console.log(`Server Started is http://localhost: ${port}`);
})

//mongodb+srv://sekar:S3kar@cluster0.irixl0g.mongodb.net/?