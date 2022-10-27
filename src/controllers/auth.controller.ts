import { Request, Response } from "express"
import { Auth } from "../interfaces/auth.interface"
import { signUp, signIn } from "../services/auth"

export const register = async ({ body }: Request, res: Response) => {
    const author = await signUp(body)
    return res.send(author)
}

export const login = async (req: Request, res: Response) => {
    const { email, password }: Auth = req.body
    const author = await signIn({ email, password })
    return res.send(author)
}