import { Router } from 'express';
import { getMessage } from './controllers/messages-controller.js';

const router = Router();

router.get('/message/:message', getMessage)

export { router };
