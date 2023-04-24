import Category from "../models/Category.js";
import path, { resolve } from "path";
import fs from "fs";
import createError from "../utility/createError.js";

const __dirname = resolve();

/**
 * @access public
 * @route /api/category
 * @method GET
 */
export const getAllCategorys = async (req, res, next) => {
    try {
        const data = await Category.find();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/category
 * @method POST
 */

export const createCategory = async (req, res, next) => {
    try {
        const checkCat = await Category.find({ name: req.body.name })
        if (checkCat.length > 0) {
            next(createError(400, "Category already added"))
        } else {
            const data = await Category.create({
                ...req.body,
                photo: req.file.filename
            });
            res.status(200).json(data);
        }
    } catch (error) {
        next(error);
    }
};



/**
 * @access public
 * @route /api/category/:id
 * @method POST
 */
export const getSingleCategory = async (req, res, next) => {
    try {
        const data = await Category.findById(req.params.id);
        if (!data) {
            next(createError(404, "Single user not found"));
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/category
 * @method GET
 */
export const updateCategory = async (req, res) => {
    try {
        const data = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/category
 * @method DELETE
 */
export const deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        fs.unlinkSync(
            path.join(__dirname, `api/public/images/category/${category.photo}`)
        );

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};
