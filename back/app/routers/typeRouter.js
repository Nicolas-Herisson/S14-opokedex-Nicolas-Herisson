import { Router } from 'express';
import * as typeRouter from './controllers/typeController.js';

export const typeRouter = Router();

//typeRouter.get("/types", typeController.getAllTypes);
//typeRouter.get("/types/:id", typeController.getType);