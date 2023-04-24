import express from "express";

// import Tag controller
import {
    createTag,
    deleteTag,
    getAllTags,
    getSingleTag,
    updateTag,
} from "../controllers/TagController.js";

// init router
const router = express.Router();





//route
router.get("/", getAllTags);
router.post("/", createTag);
router.get("/:id", getSingleTag);
router.delete("/:id", deleteTag);
router.patch("/:id", updateTag);

// export  router
export default router;
