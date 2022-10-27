import AuthorModel from "../models/Author"
import { Auth } from "../interfaces/auth.interface"
import { Author } from "../interfaces/author.interface"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/token.handle"

export const signUp = async ({ author, email, password, gender }: Author) => {
    const isExists = await AuthorModel.findOne({ email })
    if (isExists) return "Author is already exists"

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const data = await AuthorModel.create({ author, email, password: hash, gender })
    return data
}

export const signIn = async ({ email, password }: Auth) => {
    const author = await AuthorModel.findOne({ email })
    if (!author) return "Author not found"

    const matchPassword = await bcrypt.compare(password, author.password)

    if (!matchPassword) return "Password is wrong"

    const token = generateToken(author._id)
    const data = { token, author }

    return data
}