class FotoController {
  async store(req, res) {
    try {
      res.status(200).json(req.file);
    } catch (error) {
      res.status(400).json("erro: " + error);
    }
  }
}

export default new FotoController();
