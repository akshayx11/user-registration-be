import express from "express";
import User from "./../models/user.mjs"
const router = express.Router();
const userModel = new User();
router.post('/', (req, res, next) => {
    const {
        firstName,
        lastName
    } = req.query;
    const result = userModel.User.create({
        firstName,
        lastName
    });
    res.send(result);
});
router.get('/', async (req, res, next) => {
    const users = await userModel.getAllUsers();
    res.send(users);
});
export default router;