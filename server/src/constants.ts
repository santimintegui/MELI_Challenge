import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const API_URL = process.env.API_URL || 'https://api.mercadolibre.com';
export const AUTHOR_NAME = 'SANTIAGO';
export const AUTHOR_LASTNAME = 'MINTEGUI';

export const MESSAGES = {
    ERROR: {
        NOT_FOUND: 'Resource not found',
        BAD_REQUEST: 'Bad request',
        UNAUTHORIZED: 'Unauthorized',
        INTERNAL_SERVER_ERROR: 'Internal server error',
    },
    SUCCESS:{
        OK: 'Success',
    }
}