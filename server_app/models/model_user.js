var geolib = require('./../node_modules/geolib/geolib.js');

exports.get_all = function(db,cb){
	console.log('Inside get_all');
	db.collection('users').find({},{},{},function(err,users){
		if(err) cb(err,null);
		else{
			console.log('Inside get_all -  no error');
			if(users){
				users.toArray(function(err,docs){
					if(err) cb(err,null);
					else {
						console.log('Inside get_all -  users toArray');
						cb(null,docs);
					}
				});
			}
		}
	});
};

exports.get_info = function(db,params,cb){
	db.collection('users').findOne({'user_id':params.user_id},function(err,user_doc){
		if(err) cb(err,null);
		else{
			if(user_doc) cb(null,user_doc);
			else cb(404,null);
		}
	});
};

exports.get_homes = function(db,params,cb){
	db.collection('users').findOne({'user_id':params.user_id},function(err,user_doc){
		if(err) cb(err,null);
		else cb(null,user_doc.homes);
	});
};

exports.remove_home = function(db,params,cb){
	db.collection('users').update({'user_id':params.user_id},{$pull:{'homes':{'home_id':params.home_id}}},{safe:true},function(err,user_doc){
		if(err) cb(err,null);
		else cb(null,user_doc);
	});
};



exports.register = function (db,params,cb){
	console.log('Inside model_user.register');
	db.collection('users').findOne({'user_id':params.user_id},function(err,user_doc){
		if(err) cb(err,null);
		else{
			console.log('Inside model_user.register - no error, moving on...');
			if(user_doc) cb('User already exists!',null);
			else {
				console.log('No existing user ... everything is fine...');
				db.collection('users').insert(params,{},function(err,user_doc){
					if(err) cb(err,null);
					else cb(null,200);
				});
			}
		}
	});
};

exports.login = function (db,params,cb){
	db.collection('users').findOne({'user_id':params.user_id,'user_pass':params.user_pass},function(err,user_doc){
		if(err) cb(err,null);
		else cb(null,200);
	});
};

exports.user_house_stats = function (db,params, cb){
	db.collection('users').findOne({'user_id': params.user_id}, function(err, user){
		if(err) {
			cb(err, null);
		}else{
			db.collection('homes').findOne({'home_id':user.home_id}, function(err, home){
				cb(null, home);
			});
		}
	});
};

//time after the heating should be switched off when the user has exited the house
exports.user_gps_delay = function (db,params, cb){
  db.collection("users").findOne({'user_id':user_id}, function(err, user_doc){
    if(err){
      cb(err,null);
    }else{
	  var delay = user_doc.gps_delay;
      cb(null,delay);
    }
  });
};

//params = {user_id, location, home_id}
//binds a home to a user
exports.set_home = function (db, params, cb){

	var home = {
		'home_id':params.home_id,
		'location':params.location,
		'home_type':params.home_type
	}
	db.collection('homes').insert({'home_id': params.home_id, "location": params.location, 'home_type': params.home_type}, function(err, home){
		db.collection('users').update({'user_id':params.user_id}, {$set: {'house_id': home[0].house_id}}, function(err, count){
			if(err){
				cb(err, null);
			}else{
				cb(null, 200);
			}
		});
	});
};


exports.check_user_at_home = function(db, params, cb){

	db.collection('users').findOne({'user_id':params.user_id}, function(err, user){
		db.collection('homes').findOne({'home_id':user.home_id}, function(err, home){
			var current_location = {
				lattitude: params.lattitude,
				longitude: params.longitude
			};
			var distance_to_home = geolib.getDistance(home.location, current_location);
			var maximum_home_distance = 30; //radius, in which the user is considered to be at home
			 
			cb(null, distance_to_home < maximum_home_distance);
		});
	});
}
