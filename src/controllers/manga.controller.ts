import { Request, Response } from "express"
import { Manga } from "../interfaces/manga.interface"
import MangaModel from "../models/Manga"
import { handleHttp } from "../utils/error.handle"

export const createManga = async (req: Request, res: Response) => {
    try {
        const { title, chapters, genre }: Manga = req.body
        const manga = await MangaModel.create({ title, chapters, genre })
        return res.send(manga)
    } catch (error) {
        console.log(error)
        handleHttp(res, "Error while creating the Manga")
    }
}

export const getMangas = async (req: Request, res: Response) => {
    try {
        const mangas = await MangaModel.find()
        return res.send(mangas)
    } catch (error) {
        handleHttp(res, "Error Fetching Mangas")
    }
}

export const getManga = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const manga = await MangaModel.findOne({ _id: id })
        return res.send(manga)
    } catch (error) {
        handleHttp(res, "Error fetching a Manga")
    }
}

export const updateManga = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params
        const { title, chapters, genre }: Manga = body
        const updatedManga = await MangaModel.findOneAndUpdate({ _id: id }, { title, chapters, genre }, { new: true })
        return res.send(updatedManga)
    } catch (error) {
        handleHttp(res, "Error while updating the Manga")
    }
}

export const deleteManga = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        await MangaModel.deleteOne({ _id: id })
        return res.send("Manga has been deleted")
    } catch (error) {
        handleHttp(res, "Error while deleting the Manga")
    }
}