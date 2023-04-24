import express from "express";
import multer from "multer";
import path, { resolve } from "path";

// import Category controller
import {
    createCategory,
    deleteCategory,
    getAllCategorys,
    getSingleCategory,
    updateCategory,
} from "../controllers/CategoryController.js";

// init router
const router = express.Router();


const __dirname = resolve()

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "/api/public/images/category"));
    },
});

const categoryMulter = multer({
    storage,
}).single("photo");



//route
router.get("/", getAllCategorys);
router.post("/", categoryMulter, createCategory);
router.get("/:id", getSingleCategory);
router.delete("/:id", deleteCategory);
router.patch("/:id", updateCategory);

// export  router
export default router;
