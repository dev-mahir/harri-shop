import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import createError from "./errorController.js";

/**
 * @access public
 * @route /api/user
 * @method GET
 */
export const getAllUser = async (req, res, next) => {

    try {
        const data = await User.find();
        if (!data) {
            next(createError(404, "User not found"));
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/user
 * @method POST
 */
export const createUser = async (req, res, next) => {
    const hash_pass = await bcrypt.hash(req.body.password, 10);
    try {
        const data = await User.create({
            ...req.body,
            password: hash_pass,
        });
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/user/:id
 * @method POST
 */
export const getSingleUser = async (req, res, next) => {
    try {
        const data = await User.findById(req.params.id);
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
 * @route /api/user
 * @method GET
 */
export const updateUser = async (req, res, next) => {
    const hash_pass = await bcrypt.hash(req.body.password, 10);
    try {
        const data = await User.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                password: hash_pass,
            },
            {
                new: true,
            }
        );
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/user/:id
 * @method DELETE
 */
export const deleteUser = async (req, res, next) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/user/login
 * @method POST
 */
export const userLogin = async (req, res, next) => {
    try {
        // find user
        const login_user = await User.findOne({ email: req.body.email });

        // check user exists or not
        if (!login_user) {
            return next(createError(404, "Email not found"));
        }
        // check password
        const passwordCheck = await bcrypt.compare(
            req.body.password,
            login_user.password
        );

        if (!passwordCheck) {
            return next(createError(404, "Wrong password"));
        }

        // create token
        const token = jwt.sign(
            { id: login_user._id, isAdmin: login_user.isAdmin },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        );

        // login user info
        const { isAdmin, password, ...login_info } = login_user._doc;

        res.cookie('access_token', token).status(200).json({
            user: login_info,
            token: token,
        });


    } catch (error) {
        next(error);
    }
};

/**
 * @access public
 * @route /api/user/register
 * @method POST
 */
export const userRegister = async (req, res, next) => {
    const hash_pass = await bcrypt.hash(req.body.password, 10);
    try {
        const data = await User.create({
            ...req.body,
            password: hash_pass,
        });
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};
