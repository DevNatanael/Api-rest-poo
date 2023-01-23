import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// trazer todos os usuarios
router.get("/", loginRequired, userController.index);
//trazer usuario por id
router.get("/:id", userController.show);


// criar usuario
router.post("/", userController.create);
//atualizar usuario
router.put("/update", loginRequired, userController.update);
//deletar usuário
router.delete("/delete",loginRequired, userController.delete);

export default router;

/*
Métodos dos controllers
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
