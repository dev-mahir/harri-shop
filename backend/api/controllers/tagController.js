import Tag from "../models/Tag.js";

/**
 * @access public
 * @route /api/Tag
 * @method GET
 */
export const getAllTags = async (req, res, next) => {
    try {
        const tag = await Tag.find();
        res.status(200).json(tag);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/Tag
 * @method POST
 */
export const createTag = async (req, res, next) => {
    try {
        const tag = await Tag.create(req.body);
        res.status(200).json(tag);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/Tag/:id
 * @method POST
 */
export const getSingleTag = async (req, res, next) => {
    try {
        const data = await Tag.findById(req.params.id);
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
 * @route /api/Tag
 * @method GET
 */
export const updateTag = async (req, res) => {
    try {
        const data = await Tag.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};


/**
 * @access public
 * @route /api/Tag
 * @method DELETE
 */
export const deleteTag = async (req, res, next) => {
    try {
        const tag = await Tag.findByIdAndDelete(req.params.id);
        res.status(200).json(tag);
    } catch (error) {
        next(error);
    }
};
