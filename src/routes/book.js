import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import { isAdmin } from "../middlewares/verify_role";

const router = express.Router();

// PUBLIC ROUTES
// GetBooks không cần gửi lên token nên viết ở đây
router.get("/", controllers.getBooks);

// PRIVATE ROUTES
router.use(verifyToken);
router.use(isAdmin);
router.post("/", controllers.createNewBook);

module.exports = router;
