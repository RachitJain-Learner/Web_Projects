// const Post = require('../models/post') ;
const User = require('../models/user') ;

module.exports.posts = function(req, res){
    return res.end('<h1>Posts Page</h1>');
}

module.exports.home = async(req, res) =>{
    try{
        // populate the user of each posts
        /*
        let posts = await Post.find({}) ;
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });*/
        let users = await User.find({}) ;

        return res.render('home', {
            title: "Codial | Home",
            posts: posts,
            all_users: users
        }) ;

    }catch(err){
        console.log('Error :', err) ;
        return ;
    }
}