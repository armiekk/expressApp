var express = require('express');
var router = express.Router();
var mysql = require('../libraries/products.js');


mysql.initMySQL();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Products', function(req, res, next) {
  mysql.getAll(function(results){
    res.json(results);
  });
});
module.exports = router;
