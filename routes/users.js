const express = require('express') ;
const router = express.Router() ;

console.log("Users Router loaded") ;

// get the controller
const usersController = require('../controllers/users_controller') ;

router.get('/profile', usersController.profile);
router.get('/views', usersController.views) ;
router.get('posts', usersController.posts) ;

module.exports = router ;