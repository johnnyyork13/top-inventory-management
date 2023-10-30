const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const itemController = require('../controllers/itemController');
const userController = require('../controllers/usercontroller');
const categoryController = require('../controllers/categoryController');

/* GET home page. */
router.get('/', mainController.get_home);

router.get('/inventory/all', itemController.get_all_items);

router.get('/inventory/add', itemController.get_add_item);

router.post('/inventory/add', itemController.post_add_item);

router.post('/inventory/all', itemController.post_add_item); 

router.get('/inventory/:id', itemController.view_item);

router.get('/inventory/delete/:id', itemController.delete_item);



router.get('/user/add', userController.get_add_user);

router.post('/users/all', userController.create_new_user);

router.get('/users/all', userController.get_all_users);

router.get('/user/:id', userController.get_view_user);


router.get('/categories/add', categoryController.get_add_category);

router.post("/categories/all", categoryController.post_add_category);

router.get('/categories/all', categoryController.get_all_categories);

router.get('/category/:id', categoryController.get_view_category);

module.exports = router;
