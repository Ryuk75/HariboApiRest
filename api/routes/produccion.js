var express = require('express');
var router = express.Router();
var Produccion = require("../models/modProduccion.js");

router.post('/', async function (req, res, next) {
  const produccion = new Produccion({
    id_order: req.body.id_order,
    description: req.body.description,
    status: req.body.status,
    production_date: req.body.production_date,
    actions: req.body.actions,
    dispatched: req.body.dispatched,
  });
  await produccion.save();
  res.send(produccion);
});

router.get('/', async function (req, res) {
  const produccion = await Produccion.find();
  res.send(produccion);
});

router.get('/:id', async function (req, res) {
  const produccion = await Produccion.findById(req.params.id);
  res.send(produccion);
});

router.put('/', async function (req, res) {
  await Produccion.findOneAndUpdate({
    _id: req.body._id,
  }, {
    id_order: req.body.id_order,
    description: req.body.description,
    status: req.body.status,
    production_date: req.body.production_date,
    actions: req.body.actions,
    dispatched: req.body.dispatched,
  });
  res.send(true);
});

router.delete('/:id', async function (req, res) {
  await Produccion.findOneAndDelete({ _id: req.params.id });
  res.send(true);
});

module.exports = router;