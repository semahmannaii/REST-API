import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import { Storage } from "../interfaces/storage.interface"
import { uploadFile } from "../services/storage"
import { handleHttp } from "../utils/error.handle"

interface RequestX extends Request {
    author?: { id: string } | JwtPayload
}

export const fileUpload = async (req: RequestX, res: Response) => {
    try {
        const fileData: Storage = {
            fileName: `${req.file?.filename}`,
            path: `${req.file?.path}`,
        }

        const data = await uploadFile(fileData)

        return res.send(data)
    } catch (error) {
        handleHttp(res, "Error while uploading the file")
    }
}