import { Router } from 'express';
import * as teamRouter from './controllers/teamController.js';

export const teamRouter = Router();

// teamRouter.get("/teams", teamController.getAllTeams);
// teamRouter.get("/teams/:id", teamController.getTeam);
// teamRouter.post("/teams", teamController.createTeam);
// teamRouter.patch("/teams/:id", teamController.updateTeam);
// teamRouter.delete("/teams/:id", teamController.deleteTeam);
// teamRouter.put("teams/:id/pokemon/:id", teamController.addPokemonToTeam);
// teamRouter.delete("teams/:id/pokemon/:id", teamController.removePokemonFromTeam);