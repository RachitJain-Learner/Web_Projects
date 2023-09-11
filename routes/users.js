const express = require('express') ;
const router = express.Router() ;

// console.log("Users Router loaded") ;

// get the controller
const usersController = require('../controllers/users_controller') ;

router.get('/profile', usersController.profile);
router.get('/views', usersController.views) ;
router.get('/posts', usersController.posts) ;

router.get('/sign-up', usersController.signUp) ;
router.get('/sign-in', usersController.SignIn);

router.post('/create', usersController.create);
router.post('/create-session', usersController.createSession) ;

module.exports = router ; 