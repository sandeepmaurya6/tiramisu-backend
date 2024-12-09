import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    }) 
);

//some imp servr configs
app.use(express.json({ limit: "10kb",}))
app.use(express.urlencoded({ extended: true, limit: "10kb"}))
app.use(express.static("puplic"))
app.use(cookieParser())

export {app}