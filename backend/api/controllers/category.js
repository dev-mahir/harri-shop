import Product from "../models/Product.js";

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

        const data = await Product.create({
            ...req.body,
            photo: req.files.photo[0].filename,
            gallery,
            category: req.body.category.split(","),
            tags: req.body.tags.split(","),
    
        });

        res.status(200).json(data);
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
 * @route /api/Product
 * @method GET
 */
export const updateProduct = async (req, res) => {
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
export const deleteProduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};
