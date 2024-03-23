import express from 'express';
import { getCategoriesById } from '../controllers/categoriesController';

const categoriesRouter = express.Router();

categoriesRouter.get('/api/categories/:id', getCategoriesById);

export default categoriesRouter;