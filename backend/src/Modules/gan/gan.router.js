import { Router } from "express";

import { fileUpload, filterObject } from "../../utils/multer.js";
import { predict } from "./gan.controller.js";
const router = Router();

const upload = fileUpload(filterObject.image); // Adjust filterObject as per your needs

router.post('/predict', upload.single('image'),predict );

export default router;
