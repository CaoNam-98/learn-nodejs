import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import { isAdmin } from "../middlewares/verify_role";
import uploadCloud from "../middlewares/uploader";

const router = express.Router();

// PUBLIC ROUTES
// GetBooks không cần gửi lên token nên viết ở đây
router.get("/", controllers.getBooks);

// PRIVATE ROUTES
router.use(verifyToken);
router.use(isAdmin);
// single là upload 1 ảnh, fields là upload nhiều ảnh gồm nhiều key: value
router.post("/", uploadCloud.single("image"), controllers.createNewBook);

module.exports = router;
