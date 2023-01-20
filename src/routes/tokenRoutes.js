import { Router } from "express";
import tokenController from '../controllers/TokenController'

const router = new Router();

//login
router.post('/', tokenController.store)

export default router;
