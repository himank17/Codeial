const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user', {
        title: "Users"
    });
}

module.exports.messages = function(req,res){
    return res.end('<h1>View your messages</h1>')
}
//render the signIn page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in', {
        title: 'Codial | Sign In'
    })
}

//render the SignUp page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up', {
        title: 'Codial | Sign Un'
    })
}

module.exports.create = function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return; }
        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signup'); return;}
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    });
}