
module.exports.home = function(req, res){
    return res.end('<h1>Cordial is up!</h1>');
}

module.exports.about = function(req,res){
    return res.end('<h1>About Cordial</h1>');
}