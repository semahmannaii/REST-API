import { Request, Router } from "express";
import multer, { diskStorage } from "multer";
import { fileUpload } from "../controllers/storage.controller";
import { protectAuth } from "../middlewares/auth.middleware";

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, `${process.cwd()}/storage`);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const newFileName = `image-${Date.now()}.${file.originalname.split(".").pop()}`;
    cb(null, newFileName);
  },
});

const upload = multer({ storage });

const router = Router()

router.post("/", protectAuth, upload.single("file"), fileUpload)

export default router