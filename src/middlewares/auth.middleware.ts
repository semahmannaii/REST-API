import { Request, Response, NextFunction } from "express"
import { JwtPayload } from "jsonwebtoken"
import { verifyToken } from "../utils/token.handle"

interface RequestX extends Request {
    author?: string | JwtPayload
}

export const protectAuth = (req: RequestX, res: Response, next: NextFunction) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]

            const decoded = verifyToken(token)

            req.author = decoded
            next()
        } catch (error) {
            res.send("Not Authorized")
        }
    }

    if (!token) {
        res.send("Not Auhtorized, No Token")
    }
}