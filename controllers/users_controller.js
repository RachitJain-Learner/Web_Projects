const User = require('../models/user') ;

module.exports.profile = (req, res) =>{
    // return res.end('<h1>User Profile</h1>') ;
    return res.render('profile', {
        title: "Profile",
    });
}

module.exports.views = (req, res) =>{
    // return res.end('<h1>My Views</h1>') ;
    return res.render('profile', {
        title: "My Views",
    });
}

module.exports.posts = (req, res) => {
    return res.render('profile', {
        title: "My Posts",
    });
}

// render sign up page
module.exports.signUp = (req, res) => {
    return res.render('userSignUp', {
        title: "Codeial | Sign Up"
    });
}

// render the sign in Page
module.exports.SignIn = function(req, res){
    return res.render('userSignIn', {
        title: "Codeial | Sign Up"
    });
}

// get the sign Up data
module.exports.create = async(req, res) => {
    try{
        if(req.body.password != req.body.confirm_password){
            return res.redirect('back') ;
        }
        const user = await User.findOne({email: req.body.email}) ; //function(err, user){
            
        if(!user){
            const createUser = await User.create(req.body) ; //, (err, user)=>{
                if(err){ console.log("Error in creating User while Signing Up") ; return ; }
                
                return res.redirect('/users/sign-in') ;
        }   
        else{
            return res.redirect('back') ;
        }
    }   catch(err){
            console.log("Error in finding User in Signing Up", err) ;
            return ;
        }
}

// sign In and create session for user
module.exports.createSession = (req, res) => {
    // todo later
}