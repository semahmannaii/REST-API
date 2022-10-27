import { Router } from "express"
import { createManga, getMangas, getManga, updateManga, deleteManga } from "../controllers/manga.controller"
import { protectAuth } from "../middlewares/auth.middleware"

const router = Router()

router.post("/", createManga)
router.get("/", getMangas)
router.get("/:id", protectAuth, getManga)
router.put("/:id", protectAuth, updateManga)
router.delete("/:id", protectAuth, deleteManga)

export default router