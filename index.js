import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import IndexRouter from "./routes/IndexRoutes.js";
import mongoose from "mongoose";


const app = Express();

app.use(cors());
app.use(bodyParser.json());

app.use("/user-registration", IndexRouter);

async function start() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/local_db")

        app.listen(14050, () => {
            console.log("The Server is listening on the port 14050");
        })
    } catch(error) {
        console.log("Error While Starting The Server", error.message);
    }
}

start()