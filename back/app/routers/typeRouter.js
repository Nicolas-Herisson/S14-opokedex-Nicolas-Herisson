import { Router } from 'express';
import * as typeController from '../controllers/typeController.js';

export const typeRouter = Router();

typeRouter.get("/types", typeController.getAllTypes);
typeRouter.get("/types/:id", typeController.getType);
typeRouter.get("/types/:id/pokemons", typeController.getPokemonsByType);