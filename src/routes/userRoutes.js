import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

// criar usuario
router.post("/", userController.create);
// trazer todos os usuarios
router.get("/", userController.index);
//trazer usuario por id
router.get("/:id", userController.show);
//atualizar usuario
router.put("/:id",userController.update)
//deletar usuário
router.delete("/:id",userController.delete)

export default router;

/*
Métodos dos controllers
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
