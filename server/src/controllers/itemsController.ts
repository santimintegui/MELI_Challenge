import { Request, Response, NextFunction } from 'express';
import { fetchItemById, fetchItems, fetchDescriptionByItemId } from "../services/itemsServices";
import { parseSearchData, parseItemData } from "../utils";
import { MESSAGES } from '../constants';
import { DESCRIPTIONRESPONSE, MELIITEM } from '../types/items';
import { fetchCategoryById } from '../services/categoriesServices';

export const getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query: string = req.query.q?.toString() || '';

        if (!query) {
            return res.status(400).json({ message: MESSAGES.ERROR.BAD_REQUEST });
        }

        const items = await fetchItems(query);
        const parseData = parseSearchData(items);

        if (parseData.items.length === 0) {
            return res.status(404).json({ message: MESSAGES.ERROR.NOT_FOUND, data: [] });
        }
    
        return res.status(200).json({ message: MESSAGES.SUCCESS.OK, data: parseData });
    } catch (error: any) {
        const message = error?.response?.data ? error?.response?.data : error;
        return next(message)
    }
}

export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;

        if(!id) {
            return res.status(400).json({ message: MESSAGES.ERROR.BAD_REQUEST });
        }

        const itemPromise: Promise<MELIITEM> = new Promise((resolve, _reject) => {
            resolve(fetchItemById(id));
        });
        const descriptionPromise: Promise<DESCRIPTIONRESPONSE> = new Promise((resolve, _reject) => {
            resolve(fetchDescriptionByItemId(id));
        });
        const [item, description] = await Promise.all([itemPromise, descriptionPromise]);
        const parseData = parseItemData(item, description.plain_text);
        const categories = await getCategoriesById(item.category_id);
        
        return res.status(200).json({ message: MESSAGES.SUCCESS.OK, data: {...parseData, categories} });
    } catch (error:any) {
        const message = error?.response?.data ? error?.response?.data : error;
        return next(message)
    }
}

const getCategoriesById = async(id: string) =>{
    const category = await fetchCategoryById(id);
    const path: string[] = category.path_from_root.map((cat: any) => cat.name);
    return path;
}