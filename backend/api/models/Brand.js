import mongoose from "mongoose";

const brandSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        photo: {
            type: String,
            default: 'p.png'
        },
    },
    {
        versionKey: false,
    }
);

export default mongoose.model("Brand", brandSchema);
