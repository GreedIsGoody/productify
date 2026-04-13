import { requireAuth } from "@clerk/express";
import { Router } from "express";
import * as commentController from "../controllers/commentController"


const router = Router()

//POST
router.post("/:productId", requireAuth(), commentController.createComment)

//GET
router.delete("/:commentId", requireAuth(), commentController.deleteComment)

export default router;