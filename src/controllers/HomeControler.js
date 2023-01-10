import Aluno from "../models/Aluno";

class HomeController{
    async index(req, res){
      const novoALuno = await Aluno.create({
        nome:"natan",
        sobrenome:"otaviano",
        email:"natan@gmail.com",
        idade:20,
        peso:70,
        altura:1.80,
      })
      res.json(novoALuno)
    }
}

export default new HomeController();
