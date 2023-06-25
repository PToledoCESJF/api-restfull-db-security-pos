const express = require("express");
let apiRouter = express.Router();

// ({
//   client: "pg",
//   debug: true,
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false },
//   },
// });

const endpoint = "/";

apiRouter.get(endpoint + "carros", (req, res) => {
  app.db_prod("carro")
    .select("*")
    .then((carros) => res.status(200).json(carros))
    .catch((err) => {
      res.status(500).json({
        message: "Erro ao recuperar carros - " + err.message,
      });
    });
});

apiRouter.get(endpoint + "carros/:id", (req, res) => {
  let id = req.params.id;
  app.db_prod("carro")
    .select("*")
    .where({ id })
    .then((carros) => res.status(200).json(carros))
    .catch((err) => {
      res.status(500).json({
        message: "Erro ao recuperar carro - " + err.message,
      });
    });
});

apiRouter.post(endpoint + "carros", (req, res) => {
  app.db_prod("carro")
    .insert(req.body, ["id"])
    .then((carros) =>
      res
        .status(201)
        .json({ message: `Carro inserido com sucesso: id: ${carros[0].id}` })
    )
    .catch((err) => {
      res.status(500).json({
        message: "Erro ao inserir um carro - " + err.message,
      });
    });
});

apiRouter.put(endpoint + "carros/:id", (req, res) => {
  let id = req.params.id;
  app.db_prod("carro")
    .where({ id })
    .update(req.body, ["id"])
    .then((carros) =>
      res
        .status(200)
        .json({ message: `Carro atualizado com sucesso: id: ${carros[0].id}` })
    )
    .catch((err) => {
      res.status(500).json({
        message: "Erro ao atualizar os dados de um carro - " + err.message,
      });
    });
});

apiRouter.delete(endpoint + "carros/:id", (req, res) => {
  let id = req.params.id;
  app.db_prod("carro")
    .where({ id })
    .delete()
    .then(() =>
      res
        .status(200)
        .json({ message: `Carro excluido com sucesso: id: ${id}` })
    )
    .catch((err) => {
      res.status(500).json({
        message: "Erro ao excluir um carro - " + err.message,
      });
    });
});

module.exports = apiRouter;
