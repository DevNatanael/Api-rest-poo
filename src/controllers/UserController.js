import User from "../models/User";

class UserController {
  // POST
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  //retornar todos os usuarios - GET
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // retorna um usuário - GET
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  //Update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          erros: ["Id não enviado"],
        });
      }
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          erros: ["Usuário não existe"],
        });
      }

      const newUser = await user.update(req.body);

      return res.json(newUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          erros: ["Id não enviado"],
        });
      }
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          erros: ["Usuário não existe"],
        });
      }

      await user.destroy();

      return res.status(200).json("Usuário apagado com sucesso!");
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // delete
}

export default new UserController();
