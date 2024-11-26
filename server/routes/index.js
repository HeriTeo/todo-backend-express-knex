

import express from 'express';
import roleRouter from './role.route.js';
import userRouter from './user.route.js';
import taskRouter from './task.route.js';
import teamRouter from './team.route.js';
import commentRouter from './comment.route.js';

const router = express.Router();

router.use("/roles", roleRouter);
router.use("/user", userRouter);
router.use("/task", taskRouter);
router.use("/team", teamRouter);
router.use("/comment", commentRouter);

export default router;
