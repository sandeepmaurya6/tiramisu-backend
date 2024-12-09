// require('dontenv').config({path: "./env"})

import dotenv from "dotenv"
// import mongoose from "mongoose";
// import DBNAME from "./constants.js";
import express from "express";
import {connectDB} from "./db/index.js";
const app = express();

dotenv.config({ path: "./env" });

connectDB();

/*
//approach 1 to connect db

( async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`);
        app.on("ERRR:",(error) => {
            console.log("Error", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`);
        })

    } catch(error) {
        console.error("Error", error);
    }
} )()


*/