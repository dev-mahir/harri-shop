import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        photo: {
            type: String,
        },
    },
    {
        versionKey: false,
    }
);

export default mongoose.model("Category", categorySchema);
