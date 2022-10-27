import { Schema, model } from "mongoose"
import { Storage } from "../interfaces/storage.interface"

const StorageSchema = new Schema<Storage>({
    fileName: {
        type: String
    },
    path: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})

const StorageModel = model("Storage", StorageSchema)
export default StorageModel