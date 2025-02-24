import { Router } from 'express';
import * as voteRouter from './controllers/voteController.js';

export const voteRouter = Router();

// voteRouter.get("/pokemons/leaderboard", voteController.getLeaderboard);
// voteRouter.post("/pokemons/:id/votes", voteController.createVote);
//typeRouter.get("/types/:id", typeController.gettype);