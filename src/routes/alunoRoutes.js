import { Router } from "express";
import alunoController from "../controllers/AlunoController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/", loginRequired, alunoController.index); // retorna todos os alunos
router.post("/", loginRequired, alunoController.store); // cria um aluno
router.put("/:id", loginRequired, alunoController.update); // atualiza um aluno
router.get("/:id", loginRequired, alunoController.show); // mostra um aluno
router.delete("/:id", loginRequired, alunoController.delete); // deleta um aluno

export default router;
