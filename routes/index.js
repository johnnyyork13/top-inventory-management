const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const userController = require('../controllers/usercontroller');
const categoryController = require('../controllers/categoryController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inventory/all', itemController.get_all_items);

router.get('/inventory/add', itemController.get_add_item);

router.post('/inventory/add', itemController.post_add_item);

router.post('/inventory/all', itemController.post_add_item); 

router.get('/inventory/:id', itemController.view_item);

router.get('/inventory/delete/:id', itemController.delete_item);



router.get('/user/add', userController.get_add_user);

router.get('/users/all', userController.get_all_users);


router.get('/categories/add', categoryController.get_add_category);

router.get('/categories/all', categoryController.get_all_categories);

module.exports = router;
