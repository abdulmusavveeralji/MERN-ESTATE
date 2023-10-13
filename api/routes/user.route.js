import ex from "express";
import { test } from "../controllers/user.controller.js";

const router = ex.Router();

router.get("/test", test);

export default router;
