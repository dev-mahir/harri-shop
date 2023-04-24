import path, { resolve } from "path";
import multer from "multer";
// multer for slider

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "slider") {
      cb(null, path.join(resolve(), "api/public/slider"));
    } else if (file.fieldname === "profile") {
      cb(null, path.join(resolve(), "api/public/profile"));
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

export const upload = multer({ storage });
