import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

router.post("/", userController.create);

export default router;

/*
Métodos dos controllers
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
