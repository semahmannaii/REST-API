import { Schema, model } from "mongoose"
import { Manga } from "../interfaces/manga.interface"

const MangaSchema = new Schema<Manga>({
    title: {
        type: String,
        required: true
    },
    chapters: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        enum: ["Shonen", "Seinen"],
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const MangaModel = model("Manga", MangaSchema)
export default MangaModel