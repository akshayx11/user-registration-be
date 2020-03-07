import {
    encrypt,
    decrypt
} from "../utils/authentication.mjs"
import mongoose from "mongoose";
const {
    ObjectId
} = mongoose.Types;
import User from "../models/user.mjs";

const userModel = new User();
export const createUser = async (userData) => {
    userData.password = encrypt(userData.password);
    return await userModel.create(userData);
}

export const getUserById = async (userId) => {
    console.log(userId);
    const user = await userModel.getUserById(
        new ObjectId(userId)
    );
    if (!user) {
        return "User not found or deleted."
    }
    user.password = decrypt(user.password);
    return user;
};

export const updateUser = async (userId, userData) => {
    if (userData.password) {
        userData.password = encrypt(userData.password);
    }
    return await userModel.updateUser(userId, userData);
};