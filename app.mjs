import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import {
    connectDB
} from "./connection.mjs"
import userApi from "./routes/user.mjs";

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
console.log("db", connectDB());

app.use('/user', userApi);
app.get('/', (req, res, next) => {
    try {
        res.send("inavlid route");
    } catch (e) {
        next(e);
    }
});
app.listen(3000);