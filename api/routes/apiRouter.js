const express = require('express');
let apiRouter = express.Router();
const knex = require('knex')({
  client: 'pg',
  debug: true,
  connection: {
    connectionString : process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  }
});

// routerAPI.use(express.json());
// routerAPI.use(express.urlencoded({ extended: true }));

const endpoint = '/';

// const lista_carros = {
//   carros: [
//       { id: 1, modelo: "Mobi Like", marca: "FIAT", ano: 2022  },
//       { id: 2, modelo: "Kwid 1.0", marca: "Renault", ano: 2021  },
//       { id: 3, modelo: "Ônix", marca: "Chevrolet", ano: 2020  },
//       { id: 4, modelo: "HB20", marca: "Hyundai", ano: 2021  },
//       { id: 5, modelo: "Virtus", marca: "Volkswagen", ano: 2022  },
//   ]
// };

// apiRouter.get(endpoint + 'carros', (req, res) => {
//   knex.select('*').from('carro')
//     .then( carros => res.status(200).json(carros))
//     .catch(err => {
//       res.status(500).json({ 
//         message: 'Erro ao recuperar carros - ' + err.message });
//       });
// })

apiRouter.get(endpoint + 'carros/:id', (req, res) => {
  knex.select('*').from('carro').where({ id: req.params.id })
    .then( carros => res.status(200).json(carros))
    .catch(err => {
      res.status(500).json({ 
        message: 'Erro ao recuperar carros - ' + err.message });
      });
})


// routerAPI.get('/produtos/:id', (req, res) => {
//   let produto = produtos.find(p => p.id == req.params.id)
//   res.json(produto);
// });

// routerAPI.post('/produtos', (req, res) => {
//   console.log(req.body);
//   req.body.id = produtos.length + 1;
//   produtos.push(req.body);

//   res.status(201).json({
//     message: 'Produto adicionado com sucesso',
//     data: { id: req.body.id}
//   });
// });

// routerAPI.put('/produtos/:id', (req, res) => {
//   let produto = produtos.find(p => p.id == req.params.id);
//   produto.descricao = req.body.descricao;
//   produto.marca = req.body.marca;
//   produto.preco = req.body.preco;
  
//   res.status(200).json({
//     message: 'Produto atualizado com sucesso',
//     data: { produto: produto}
//   });
// });

// routerAPI.delete('/produtos/:id', (req, res) => {
//   let produto = produtos.find(p => p.id == req.params.id);
//   let index = produtos.indexOf(produto);
//   let removed = produtos.splice(index, 1);

//   res.status(200).json({
//     message: 'Produto deletado com sucesso',
//     data: { removido: removed }
//   });
// });

module.exports = apiRouter;
