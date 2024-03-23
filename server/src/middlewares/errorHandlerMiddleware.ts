import { Request, Response, NextFunction } from 'express';
import { MESSAGES } from '../constants';

type ErrorResponse ={
    error: string;
    message: string;
    status: number;
}

const errorHandlerMiddleware = (err: ErrorResponse, _req: Request, res: Response, _next: NextFunction) => {
    const { error, status, message } = err;
    console.log({ error, status, message });
    if (error && status && message) {
        return res.status(status).json({ error, message });
    }
    return res.status(500).json({ error: MESSAGES.ERROR.INTERNAL_SERVER_ERROR});
}

export default errorHandlerMiddleware;
