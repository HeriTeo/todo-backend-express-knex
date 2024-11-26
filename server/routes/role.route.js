

import express from 'express';
import roleController from '../controllers/role.controller.js';

const router = express.Router();

router.get("/", roleController.list);
router.get("/:id", roleController.get);
router.post("/", roleController.create);
router.put("/:id", roleController.update);
router.delete("/:id", roleController.remove);

export default router;
