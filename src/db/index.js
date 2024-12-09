import mongoose from "mongoose";

import {DB_NAME} from "../constants.js";

const connectDB = async function(){

    try {
        
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n DB Connected!! DB Host ${connectInstance.connection.host}`)
    } catch (error) {
        console.error("Mongo Connection Error!", error)
        process.exit(1)
    }

}

export {connectDB}