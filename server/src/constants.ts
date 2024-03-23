import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3001;
export const API_URL = process.env.API_URL;
export const AUTHOR_NAME = process.env.AUTHOR_NAME;
export const AUTHOR_LASTNAME = process.env.AUTHOR_LASTNAME;

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