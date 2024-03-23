import express from 'express';
import categoriesRouter from './categories';
import itemsRouter from './items';

const router = express.Router();

router.use(categoriesRouter);
router.use(itemsRouter);

export default router;
