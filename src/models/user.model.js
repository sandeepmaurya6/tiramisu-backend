import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({

    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        lowercase: true,
        trim: true, //ignore whitespaces
        index: true, //make it searchable
    },
    email:{ 
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true, //ignore whitespaces
    },
    fullName:{ 
        type: String,
        required: [true, "Fullname is required"],
        trim: true, //ignore whitespaces
        index: true, //make it searchable
    },
    avatar: {
        type: String, //cloudinary url
        required: true,
    },
    coverimage: {
        type: String, //cloudinary url
    },
    watchhistory:{ 
        type: Schema.Types.ObjectId,
        ref: "video",
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    refreshToken: {
        type: String,
    }

},{timestamps: true})

userSchema.Pre("save", async function(next){
    if(!isModified(this.password)) return next();

    this.password = bcrypt(this.password, 10)

})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await becrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function() {
    jwt.sign( {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName

    },
    process.env.ACCESS_TOKEN_SECRET,
    { 
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}
userSchema.methods.generateRefreshToken = function() {
    jwt.sign( {
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { 
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User", userSchema)