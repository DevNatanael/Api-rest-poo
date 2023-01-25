import multer from "multer";
import multerConfig from "../config/multer";
import Foto from "../models/Foto";

const upload = multer(multerConfig).single("arquivo");

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { alunoo_id } = req.body;
        const foto = await Foto.create({ originalname, filename, alunoo_id });

        return res.status(200).json(foto);
      } catch (error) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }
    });
  }
}

export default new FotoController();
