const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const itemController = require('../controllers/itemController');
const sellerController = require('../controllers/sellerController');
const categoryController = require('../controllers/categoryController');

/* GET home page. */
router.get('/', mainController.get_home);

router.get('/inventory/all', itemController.get_all_items);

router.get('/inventory/add', itemController.get_add_item);

router.post('/inventory/add', itemController.post_add_item);

router.post('/inventory/all', itemController.post_add_item); 

router.get('/inventory/:id', itemController.view_item);

router.get('/inventory/delete/:id', itemController.delete_item);



router.get('/seller/add', sellerController.get_add_seller);

router.post('/sellers/all', sellerController.create_new_seller);

router.get('/sellers/all', sellerController.get_all_sellers);

router.get('/seller/:id', sellerController.get_view_seller);

router.post('/seller/:id', sellerController.delete_items);

router.post('/seller/update/:id', sellerController.post_update_seller);

router.get('/seller/update/:id', sellerController.get_update_seller);

router.get('/seller/delete/:id', sellerController.get_delete_seller);


router.get('/categories/add', categoryController.get_add_category);

router.post("/categories/all", categoryController.post_add_category);

router.get('/categories/all', categoryController.get_all_categories);

router.get('/category/:id', categoryController.get_view_category);

router.get('/category/delete/:id', categoryController.get_delete_category);

router.get('/category/update/:id', categoryController.get_update_category);

router.post('/category/update/:id', categoryController.post_update_category);

module.exports = router;
