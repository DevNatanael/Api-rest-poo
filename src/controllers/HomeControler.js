import Aluno from "../models/Aluno";

class HomeController{
    async index(req, res){
      res.json('oi')
    }
}

export default new HomeController();
