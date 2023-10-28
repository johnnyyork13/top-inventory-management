const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inventory/all', itemController.get_all_items);

module.exports = router;
