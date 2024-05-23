var express = require('express');
var router = express.Router();

var rankingController = require('../controllers/rankingController');

router.get("/obterRanking", function (req, res) {
    rankingController.obterRanking(req, res);
  });
module.exports = router;
