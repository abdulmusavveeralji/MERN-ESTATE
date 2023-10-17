import express from "express";
import {
  createListing,
  deleteListing,
  getListingById,
  getListings,
  updateListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/getListing/:id", getListingById);
router.get("/get", verifyToken, getListings);

export default router;
