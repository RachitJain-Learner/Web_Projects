const express = require('express') ;
const router = express.Router() ;

const postsController = require('../controllers/posts_controller') ;
router.get('/posts', postsController.posts);

// console.log("Posts Router loaded") ;
module.exports = router ;