import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import { getProducts, getProductbyId } from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductbyId);

export default router;