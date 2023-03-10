import express from "express";
import fs from "fs";
import { getProducts } from "../service/product-service.js";

export const Router = express.Router();

Router.get("/products", async (req, res) => {
    console.log("products request received");
    const products = await getProducts();
    console.log(products);

    res.status(200).send("products request received");
    res.status(200).send(products);
})