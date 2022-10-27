import express from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import db from "./config"
import mangaRoutes from "./routes/manga.routes"
import authRoutes from "./routes/auth.routes"
import storageRoutes from "./routes/storage.routes"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth/", authRoutes)
app.use("/mangas/", mangaRoutes)
app.use("/storage/", storageRoutes)

db()
    .then(() => {
        app.listen(5000, () => console.log("Server is ok"))
        console.log(`DB is connected on ${mongoose.connection.host}`)
    })
    .catch((error) => {
        console.log(error)
    })