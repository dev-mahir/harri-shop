import jwt from "jsonwebtoken";
import createError from "../controllers/errorController.js";

// check user authenticated or not
const userMiddlware = (req, res, next) => {
    const token = req.cookies.access_token;

    try {
        if (!token) {
            return next(createError(401, "You are not authenticated"));
        }
        // if logged in
        const login_user = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!login_user) {
            return next(createError(401, "Invalid token"));
        }

   

        if (login_user._id !== req.params.id) {
            return next(createError(401, "You cannot access this feature"));
        }
        if (login_user) {
            req.user = login_user;
        }

        next();
    } catch (error) {
        return next(error);
    }
};

// export
export default userMiddlware;
