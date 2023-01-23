import jwt from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ["É preciso fazer login"],
    });
  }

  const [token] = authorization.split(" ");

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = dados;

    //verificar se o id e o email do usuário ainda são os mesmos
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if(!user){
      return res.status(401).json({
        errors: ["Usuário Inválido, Faça login novamente ou crie sua conta"],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ["Token expirado ou inválido"],
    });
  }
};
