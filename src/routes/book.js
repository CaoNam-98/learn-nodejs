import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import { isCreatorOrAdmin } from "../middlewares/verify_role";
import uploadCloud from "../middlewares/uploader";

const router = express.Router();

// PUBLIC ROUTES
// GetBooks không cần gửi lên token nên viết ở đây
router.get("/", controllers.getBooks);

// PRIVATE ROUTES
router.use(verifyToken);
router.use(isCreatorOrAdmin);
// single là upload 1 ảnh, fields là upload nhiều ảnh gồm nhiều key: value
router.post("/", uploadCloud.single("image"), controllers.createNewBook);
router.put("/", uploadCloud.single("image"), controllers.updateBook);
router.delete("/", controllers.deleteBook);

module.exports = router;
