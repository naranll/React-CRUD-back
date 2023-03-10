import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Router } from "./routes/product.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(Router);

app.listen(4000, () => {
    console.log("listening on port 4000");
})
