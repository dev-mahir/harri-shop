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
import { createBrand, getAllBrands } from "../controllers/brandController.js";
import { addColor, deleteColor, getAllColor } from "../controllers/colorController.js";

// init router
const router = express.Router();




//route
router.get("/", getAllColor);
router.post("/", addColor);
router.get("/:id", getSingleCategory);
router.delete("/:id", deleteColor);
router.patch("/:id", updateCategory);

// export  router
export default router;
