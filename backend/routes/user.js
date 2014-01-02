var mongoose = require('mongoose');


/*
 * GET users listing.
 */
exports.list = function(req, res){
	
    var UserModel = mongoose.model('User');	
	
	//All users
    return UserModel.find(function (err, users) {
      if (!err) {
        return res.json(users);
      } else {
        return console.log(err);
      }
    });
	
};

exports.show = function(req, res){

	 var UserModel = mongoose.model( 'User' );	
	
	//Get User req.params.userId
    return UserModel.findById(req.params.userId, function (err, user) {
      if (!err) {
        return res.json(user);
      } else {
        return console.log(err);
      }
    });
};

exports.create = function(req, res){
	
    var UserModel = mongoose.model('User');	
	
    var user;
     console.log("POST: ");
     console.log(req.body);
	 
	//Verify Parameters from payload
	var requiredFields = ['name', 'email'];
	for (var i = 0; i < requiredFields.length; i++) {
		if(!req.body.hasOwnProperty(requiredFields[i])) {
		    res.statusCode = 400;
		    return res.send('Error 400: Post syntax incorrect.');
		}
	}
	 
     user = new UserModel({
 	    email: req.body.email,
 	    name: req.body.name,
 	    gender: req.body.gender
     });
	 
     user.save(function (err) {
       if (!err) {
         return console.log("created");
       } else {
         return console.log(err);
       }
     });
     return res.json(user);
};

exports.update = function(req, res){

    var UserModel = mongoose.model('User');	
	
	return UserModel.findById(req.body._id, function (err, user) {

				
		//Verify Parameters from payload
		var requiredFields = ['name', 'email'];
		for (var i = 0; i < requiredFields.length; i++) {
			if(!req.body.hasOwnProperty(requiredFields[i])) {
			    res.statusCode = 400;
			    return res.send('Error 400: Post syntax incorrect.');
			}
		}
		
	    user.email = req.body.email;
	    user.name = req.body.name;
	    user.gender = req.body.gender;
	    return user.save(function (err) {
	      if (!err) {
	        console.log("updated");
	      } else {
	        console.log(err);
	      }
	      return res.json(user);
	    });
	  });
};

exports.delete = function(req, res){
	
    var UserModel = mongoose.model('User');	
	
	//Delete User req.params.userId
    return UserModel.findById(req.params.userId, function (err, user) {
      return user.remove(function (err) {
        if (!err) {
          console.log("removed");
          return res.json(true);
        } else {
          console.log(err);
          res.statusCode = 500;
          return res.json(false);
        }
      });
    });
	
		

};