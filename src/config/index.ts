import { connect } from "mongoose"
import "dotenv/config"

async function db(): Promise<void> {
    const MONGO_URI = <string>process.env.MONGO_URI
    await connect(MONGO_URI)
}

export default db