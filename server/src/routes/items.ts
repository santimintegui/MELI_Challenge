import express from 'express';
import { getItems, getItemById } from '../controllers/itemsController';

const itemsRouter = express.Router();

itemsRouter.get('/api/items', getItems);
itemsRouter.get('/api/items/:id', getItemById);

export default itemsRouter;