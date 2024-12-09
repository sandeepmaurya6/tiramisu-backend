// require('dontenv').config({path: "./env"})

import dotenv from "dotenv"
// import mongoose from "mongoose";
// import DBNAME from "./constants.js";
import express from "express";
import {connectDB} from "./db/index.js";
const app = express();

dotenv.config({ path: "./env" });

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log("MongoDB connection failed.", error);
});

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