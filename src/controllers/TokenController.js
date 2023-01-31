import User from "../models/User";
import jwt from 'jsonwebtoken'
class TokenController {
  async store(req, res) {
    try {
      const { email = "", password = "" } = req.body;

      if(!email || !password){
        return res.status(401).json({
          errors: ["Credenciais Inválidas"]
        })
      }

      const user = await User.findOne({ where: { email } });

      if(!user){
        return res.status(401).json({
          errors: ["Usuário não existe"]
        })
      }

      if(!(await user.passwordIsValid(password))){
        return res.status(401).json({
          errors: ["Senha inválida"]
        })
      }
      const {id} = user

      const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION
      })


      res.status(200).json({token, user:{nome: user.nome, id,email}});
    } catch (error) {
      console.log(error)
      return res.status(400).json("erro: " + error);
    }
  }
}

export default new TokenController();
