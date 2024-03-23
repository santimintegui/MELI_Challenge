import { Request, Response, NextFunction } from 'express';

const authMiddleware = (_req: Request, _res: Response, next: NextFunction) => {
    // implement the logic to auth with author here
    next();
}

export default authMiddleware;