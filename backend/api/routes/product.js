import express from "express";
import multer from "multer";
import path, { resolve } from "path";

// import Product controller
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    getSingleProductbySlug
} from "../controllers/ProductController.js";

// init router
const router = express.Router();

const __dirname = resolve();

// product photo upload
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    },
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "api/public/images/products"));
    },
});

// for Single fields
// const productMulter = multer({
//     storage
// }).single('photo');   //photo name will be from input name

// // for multiple items
// const productMulter = multer({
//     storage,
// }).array('photo', 5); // max 5 photo

// multiple fields
const productMulter = multer({
    storage,
}).fields([
    {
        name: "photo",
        maxCount: 1,
    },
    {
        name: "gallery",
        maxCount: 10,
    },
]);


//route
router.get("/", getAllProducts);
router.post("/", productMulter, createProduct);
router.get("/:slug", getSingleProductbySlug);

router.get("/:id", getSingleProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

// export  router
export default router;
