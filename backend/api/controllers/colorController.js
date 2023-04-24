import Color from "../models/Color.js";

/**
 * @access public
 * @route /api/Brand
 * @method GET
 */
export const getAllColor = async (req, res, next) => {
    try {
        const brand = await Color.find();
        res.status(200).json(brand);
    } catch (error) {
        next(error);
    }
};




/**
 * @access public
 * @route /api/color
 * @method POST
 */
export const addColor = async (req, res, next) => {
    try {
        const brand = await Color.create(req.body);
        res.status(200).json(brand);
    } catch (error) {
        next(error);
    }
};



/**
 * @access public
 * @route /api/color/:id
 * @method DELETE
 */
export const deleteColor = async (req, res, next) => {
    try {
        const brand = await Color.findByIdAndDelete(req.params.id);
        res.status(200).json(brand);
    } catch (error) {
        next(error);
    }
};
