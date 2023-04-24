import mongoose from "mongoose";

const colorSchema = mongoose.Schema(
    {
        name: {
            type: String,
        }
    },
    {
        versionKey: false,
    }
);

export default mongoose.model("Color", colorSchema);
