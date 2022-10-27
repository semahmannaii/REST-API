import { Schema, model } from "mongoose"
import { Author } from "../interfaces/author.interface"

const AuthorSchema = new Schema<Author>({
    author: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
}, {
    timestamps: true,
    versionKey: false
})

const AuthorModel = model("Author", AuthorSchema)
export default AuthorModel