import { Request, Response, NextFunction } from 'express';
import { fetchCategoryById } from '../services/categoriesServices';
import { MESSAGES } from '../constants';

export const getCategoriesById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const category = await fetchCategoryById(id);
        const path: string[] = category.path_from_root.map((cat: any) => cat.name);
        if(path.length === 0) {
            return res.status(404).json({ message: MESSAGES.ERROR.NOT_FOUND, data: []});
        }
        return res.status(200).json({ message: MESSAGES.SUCCESS.OK, data: path });
    } catch (error:any) {
        const message = error?.response?.data ? error?.response?.data : error;
        return next(message)
    }
}