const express = require('express');
const router = express.Router();
const { abrigos, denuncias, psicologos } = require('./banco');


router.get('/abrigos', (req, res) => {
  res.json(abrigos);
});


router.get('/denuncias', (req, res) => {
  res.json(denuncias);
});


router.get('/psicologos', (req, res) => {
  res.json(psicologos);
});

module.exports = router;
