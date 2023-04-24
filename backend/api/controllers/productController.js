import Product from "../models/Product.js";
import fs from "fs";
import path, { resolve } from "path";
import createError from "../utility/createError.js";

const __dirname = resolve();

/**
 * @access public
 * @route /api/Product
 * @method GET
 */
export const getAllProducts = async (req, res, next) => {
    try {
        const data = await Product.find();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/Product
 * @method POST
 */

export const createProduct = async (req, res, next) => {
    try {
        let gallery = [];
        for (let i = 0; i < req.files.gallery.length; i++) {
            gallery.push(req.files.gallery[i].filename);
        }

        const product = await Product.create({
            ...req.body,
            photo: req.files.photo[0].filename,
            gallery,
            category: req.body.category.split(","),
            tags: req.body.tags.split(","),
        });

        if (product) {
            res.status(200).json(product);
        }
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/Product/:id
 * @method POST
 */
export const getSingleProduct = async (req, res, next) => {
    try {
        const data = await Product.findById(req.params.id);
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
 * @route /api/Product/:slug
 * @method POST
 */
export const getSingleProductbySlug = async (req, res, next) => {
    try {
        const data = await Product.findOne({slug: req.params.slug});
        if (!data) {
            next(createError(404, "Not found"));
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};


/**
 * @access public
 * @route /api/Product
 * @method GET
 */
export const updateProduct = async (req, res, next) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/Product
 * @method DELETE
 */
export const deleteProduct = async (req, res, next) => {
    const {id} = req.params;
    try {

        const product = await Product.findByIdAndDelete(id);
        
        fs.unlinkSync(path.join(__dirname, `api/public/images/products/${product.photo}`) );

        product.gallery.forEach((items) => {
            fs.unlinkSync(path.join(__dirname,`api/public/images/products/${items}}`))
        });

        if(product){
            res.status(200).json({
                message: "Product deleted successfull"
            });
        }

    
    } catch (error) {
        next(error);
    }
};
