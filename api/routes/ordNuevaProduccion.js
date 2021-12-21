var express = require('express');
var router = express.Router();
var Produccion = require("../models/modProduccion.js");

router.post('/', async function (req, res, next) {
  const ordProduccion = new Produccion({
    item: req.body.id_order,
    iD: req.body.description,
    name: req.body.name,
    cantReq: req.body.cantReq,
    unity: req.body.unity,
    status: req.body.status,
  });
  await ordProduccion.save();
  res.send(ordProduccion);
});

router.get('/', async function (req, res) {
  const ordProduccion = await Produccion.find();
  res.send(ordProduccion);
});

router.get('/:id', async function (req, res) {
  const ordProduccion = await Produccion.findById(req.params.id);
  res.send(ordProduccion);
});

router.put('/', async function (req, res) {
  await Produccion.findOneAndUpdate({
    _id: req.body._id,
  }, {
    item: req.body.id_order,
    iD: req.body.description,
    name: req.body.name,
    cantReq: req.body.cantReq,
    unity: req.body.unity,
    status: req.body.status,
  });
  res.send(true);
});

router.delete('/:id', async function (req, res) {
  await Produccion.findOneAndDelete({ _id: req.params.id });
  res.send(true);
});

module.exports = router;