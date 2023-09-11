const User = require('../models/user') ;

module.exports.profile = async(req, res) =>{
    try{
        // only show profile, when user signed in
        if(req.cookies.user_id){
            let user = await User.findById(req.cookies.user_id) ;
            if(user){
                // return res.end('<h1>User Profile</h1>') ;
                return res.render('user_profile', {
                    title: "Profile",
                    user: user
                });
            }
            // if user not found, then also 
            // redirect to sign in page
        }
        return res.redirect('/users/sign-in') ;    
    
    } catch(err){
        console.log("Error: ", err) ;
        return  ;
    }
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
module.exports.createSession = async(req, res) => {
    // steps to authenticate
    // find the user from database
    try{
        const user = await User.findOne({email: req.body.email}) ;

        // handle user found
        if(user){
            // handle password which don't match
            if(user.password != req.body.password){
                return res.redirect('back') ;
            }

            // handle session creation
            res.cookie('user_id', user.id) ;
            return res.redirect('/users/profile') ;
        }
        else{
            // handle user not found
            return res.redirect('back') ;
        }
    }catch(err){
        console.log("Error: ", err) ;
        return ;
    }
}