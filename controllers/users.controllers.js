module.exports.profile = function(req, res){
    return res.end('<h1>Users Page</h1>');
}

module.exports.messages = function(req,res){
    return res.end('<h1>View your messages</h1>')
}