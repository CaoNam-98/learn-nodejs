import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";

const router = express.Router();

// PUBLIC ROUTES
// GetBooks không cần gửi lên token nên viết ở đây
router.get("/", controllers.getBooks);

// PRIVATE ROUTES
router.use(verifyToken);
router.get("/", controllers.getCurrent);

module.exports = router;
