const express = require('express') ;

const router = express.Router() ;
const homeController = require('../controllers/home_controller');

console.log("Router loaded") ;

router.get('/', homeController.home);
router.get('/about', homeController.about);

// accessing routes of users
router.use('/users', require('./users')) ;
router.use('/all', require('./posts'));

module.exports = router ;