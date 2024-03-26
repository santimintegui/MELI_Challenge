import express from 'express';
import itemsRouter from './items';

const router = express.Router();

router.use(itemsRouter);

export default router;
