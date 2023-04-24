import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        regular_price: {
            type: String,
        },
        sale_price: {
            type: String,
        },
        sort_desc: {
            type: String,
        },
        stock: {
            type: String,
        },
        category: {
            type: Array,
            default: []
        },
        tags: {
            type: Array,
            default: []
        },
        slug: {
            type: String,
        },
        photo: {
            type: String,
            default: 'p.png'
        },
        gallery: {
            type: Array,
            default: []
        }
    },
    {
        timestamp: true,
        versionKey: false,
    }
);

export default mongoose.model("Product", productSchema);
