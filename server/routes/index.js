

import express from 'express';
import roleRouter from './role.route.js';

const router = express.Router();

router.use("/roles", roleRouter);

export default router;
