import express from "express";
import Product from '../models/product.model.js';
import mongoose from "mongoose";
const PORT = 5001;
const router = express.Router();
import { getProducts, createProduct, deleteProduct , updateProduct } from "../controller/product.controller.js";
router.get("/", getProducts );
router.post("/",createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;