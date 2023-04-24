import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
        },
        cell: {
            type: String,
            trim: true,
            required: true,
        },
        username: {
            type: String,
            trim: true,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        photo: {
            type: String,
        },
        status: {
            type: Boolean,
            default: true,
        },
        trash: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamp: true,
        versionKey: false,
    }
);

export default mongoose.model("User", userSchema);
