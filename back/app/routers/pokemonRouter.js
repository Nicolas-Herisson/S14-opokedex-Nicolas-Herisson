import { Router } from 'express';
import * as pokemonController from '../controllers/pokemonController.js';

export const pokemonRouter = Router();

pokemonRouter.get("/pokemons", pokemonController.getAllPokemons);
pokemonRouter.get("/pokemons/:id", pokemonController.getPokemon);