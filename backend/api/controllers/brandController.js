import Brand from "../models/Brand.js";

/**
 * @access public
 * @route /api/Brand
 * @method GET
 */
export const getAllBrands = async (req, res, next) => {
    try {
        const brand = await Brand.find();
        res.status(200).json(brand);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/Brand
 * @method POST
 */
export const createBrand = async (req, res, next) => {
    try {
        const brand = await Brand.create(req.body);
        res.status(200).json(brand);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/Brand/:id
 * @method POST
 */
export const getSingleTag = async (req, res, next) => {
    try {
        const data = await Brand.findById(req.params.id);
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
 * @route /api/Brand
 * @method GET
 */
export const updateTag = async (req, res) => {
    try {
        const data = await Brand.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};


/**
 * @access public
 * @route /api/Brand
 * @method DELETE
 */
export const deleteTag = async (req, res, next) => {
    try {
        const brand = await Brand.findByIdAndDelete(req.params.id);
        res.status(200).json(brand);
    } catch (error) {
        next(error);
    }
};
