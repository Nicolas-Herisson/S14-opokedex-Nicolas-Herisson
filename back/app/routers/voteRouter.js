import { Router } from 'express';
import * as voteController from '../controllers/voteController.js';

export const voteRouter = Router();

voteRouter.get("/pokemons/leaderboard", voteController.getLeaderboard);
voteRouter.post("/pokemons/:id/votes", voteController.createVote);