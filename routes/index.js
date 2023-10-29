const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inventory/all', itemController.get_all_items);

router.get('/inventory/add', itemController.get_add_item);

router.post('/inventory/add', itemController.post_add_item);

router.post('/inventory/all', itemController.post_add_item); 

router.get('/inventory/:id', itemController.view_item);

module.exports = router;
