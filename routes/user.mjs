import express from "express";
import User from "./../models/user.mjs"
import {
    createUserValidator
} from "../validators/user.mjs";
const router = express.Router();
const userModel = new User();
router.post('/', async (req, res, next) => {
    try {
        const {
            error,
            value
        } = createUserValidator.validate(req.body);
        if (error) {
            res.statusCode = 403;
            res.send(error);
        }
        const result = await userModel.create(value);
        res.send(result);
    } catch (e) {
        next(e);
    }

});
router.get('/', async (req, res, next) => {
    const users = await userModel.getAllUsers();
    res.send(users);
});
export default router;