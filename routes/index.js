const express = require("express");
const router = express.Router();

const { Producto } = require("../models");

router.get("/productos", (req, res) => {
  Producto.findAll().then(productos => res.json(productos));
});

router.get("/productos/:id", (req, res) => {
  Producto.findByPk(parseInt(req.params.id)).then(producto => {
    producto ? res.json(producto) : res.sendStatus(404);
  });
});
router.post("/productos", (req, res) => {
  Producto.create(req.body)
    .then(producto => {
      res.status(201).json(producto);
    })
    .catch(err => res.sendStatus(500));
});

router.put("/productos/:id", (req, res) => {
  Producto.findByPk(parsentInt(req.params.id))
    .then(producto => producto.update(req.body))
    .then(producto => {
      res.json(producto);
    })
    .catch(err => res.sendStatus(500));
});

router.delete("/productos/:id", (req, res) => {
  Producto.findByPk(parsentInt(req.params.id))
    .then(producto => producto.destroy())
    .then(() => res.sendStatus(204))
    .catch(err => res.sendStatus(500));
});

module.exports = router;
