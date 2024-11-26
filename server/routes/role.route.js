

import express from 'express';
import RoleController from '../controllers/role.controller.js';

const router = express.Router();

router.get("/", RoleController.list);
router.get("/:id", RoleController.get);
router.post("/", RoleController.create);
router.put("/:id", RoleController.update);
router.delete("/:id", RoleController.remove);

export default router;
