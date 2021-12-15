import dotenv from 'dotenv';

dotenv.config({});

// eslint-disable-next-line import/prefer-default-export
export const { APP_PORT, DATABASE, DATABASE_PASSWORD, NODE_ENV } = process.env;
