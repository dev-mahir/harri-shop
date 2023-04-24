import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";

import productRoute from "./routes/product.js";
import categoryRoute from "./routes/category.js";
import userRoute from "./routes/user.js";
import tagRoute from "./routes/tag.js";
import brandRoute from "./routes/brand.js";
import colorRoute from "./routes/color.js";

import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";

// init express
const app = express();
app.use(cors());

// static folder
app.use(express.static("api/public"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// env config
const env = dotenv.config();

// init env variables
const PORT = process.env.PORT || 5050;

// api routes

app.get("/", (req, res) => {
    res.send("Server is running");
});


app.use("/api/v1/product", productRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tag", tagRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/color", colorRoute);

// express error handler
app.use(errorHandler);


// listen server
app.listen(PORT, () => {
    connectDB();
    console.log(`server is running at http://localhost:${PORT}`.bgGreen.black);
});


