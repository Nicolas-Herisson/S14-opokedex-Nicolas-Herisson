import "dotenv/config";

import express from "express";
import cors from "cors";

import { pokemonRouter } from "./app/routers/pokemonRouter.js";
import { typeRouter } from "./app/routers/typeRouter.js";


const app = express();


app.use(cors());


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.use(pokemonRouter);
app.use(typeRouter)


const port = process.env.PORT || 3000;
await app.listen(port);
console.log(`L'API demarrée à l'adresse : http://localhost:${port}`);
