

import express from 'express';
import taskController from '../controllers/task.controller.js';

const router = express.Router();

router.get("/", taskController.list);
router.get("/:id", taskController.get);
router.post("/", taskController.create);
router.put("/:id", taskController.update);
router.delete("/:id", taskController.remove);

export default router;
