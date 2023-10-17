import express from "express";
import {
  createListing,
  deleteListing,
  getListing,
  getUser,
  updateListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/getListing/:id", getListing);
router.get("/:id", verifyToken, getUser);

export default router;
