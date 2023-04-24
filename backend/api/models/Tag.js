import mongoose from "mongoose";

const tagSchema = mongoose.Schema(
    {
        name: {
            type: String,
        }
    },
    {
        versionKey: false,
    }
);

export default mongoose.model("Tag", tagSchema);
