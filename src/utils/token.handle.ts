import { sign, verify } from "jsonwebtoken"
import { Types } from "mongoose"

export const generateToken = (id: Types.ObjectId) => {
    const jwt = sign({ id }, <string>process.env.SECRET_KEY, { expiresIn: "1h" })
    return jwt
}

export const verifyToken = (token: string) => {
    const jwt = verify(token, <string>process.env.SECRET_KEY)
    return jwt
}