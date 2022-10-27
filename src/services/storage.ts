import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/Storage";

export const uploadFile = async ({ fileName, path }: Storage) => {
    const data = await StorageModel.create({ fileName, path })
    return data
}