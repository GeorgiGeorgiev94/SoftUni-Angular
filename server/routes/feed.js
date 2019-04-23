const router = require('express').Router();
const feedController = require('../controllers/feed');
const orderController = require('../controllers/order');
//const isAuth = require('../middleware/is-auth');


router.get('/dog, feedController.getDog');
router.post('/dog/create',  feedController.createDog);
router.post('/dog/edit/:id', feedController.editDog);
router.delete('/dog/delete/:id', feedController.deleteDog);
router.get('/dog/details/:id', feedController.detailsDog);

router.get('/order', orderController.getOrder);
router.post('/order/create', orderController.createOrder);
router.delete('/order/delete/:id', orderController.deleteOrder);

module.exports = router;