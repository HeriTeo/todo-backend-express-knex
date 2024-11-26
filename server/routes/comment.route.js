

import express from 'express';
import commentController from '../controllers/comment.controller.js';

const router = express.Router();

router.get("/", commentController.list);
router.get("/:id", commentController.get);
router.post("/", commentController.create);
router.put("/:id", commentController.update);
router.delete("/:id", commentController.remove);

export default router;
