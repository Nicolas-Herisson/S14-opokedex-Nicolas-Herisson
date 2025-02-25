import "dotenv/config";

import express from "express";
import cors from "cors";

import { pokemonRouter } from "./app/routers/pokemonRouter.js";
import { typeRouter } from "./app/routers/typeRouter.js";
import { teamRouter } from "./app/routers/teamRouter.js";
import bodyParser from "body-parser";


const app = express();


app.use(cors());


app.use(express.json()); 
//app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(pokemonRouter);
app.use(typeRouter);
app.use(teamRouter);


const port = process.env.PORT || 3000;
await app.listen(port);
console.log(`L'API demarrée à l'adresse : http://localhost:${port}`);
