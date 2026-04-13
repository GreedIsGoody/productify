import { Router } from "express";
import * as productContoller from "../controllers/productController";
import { requireAuth } from "@clerk/express";

const router = Router()



// GET /api/products => get all products (public)

router.get("/", productContoller.getAllProducts)

// GET /api/products/my - Get current user's products (protected)
router.get("/my", requireAuth(), productContoller.getMyProducts);

// GET /api/products/:id - Get single product by ID (public)
router.get("/:id", productContoller.getProductById);

// POST /api/products - Create new product (protected)
router.post("/", requireAuth(), productContoller.createProduct);

// PUT /api/products/:id - Update product (protected - owner only)
router.put("/:id", requireAuth(), productContoller.updateProduct);

// DELETE /api/products/:id - Delete product (protected - owner only)
router.delete("/:id", requireAuth(), productContoller.deleteProduct);


export default router;