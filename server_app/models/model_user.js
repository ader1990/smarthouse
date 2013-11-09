
var db = require('./mongo.js');

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

exports.add_home = function(db,params,cb){
	db.collection('users').update({'user_id':params.user_id},{$push:{'homes':params.home_id}},function(err,user_doc){
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

exports.house_stats = function (db,params, cb){
  db.collection('home').findOne({'home_id':params.house_id}, function(err, home_stat){
    if(err){ 
      cb(err,null);
    } else{
      cb(null,home_stat);
    }
  });
};

//time after the heating should be switched off when the user has exited the house
exports.user_gps_delay = function (db,params, cb){
  db.collection("users").findOne({'user_id':user_id}, function(err, user_doc){
    if(err){
      cb(err,null);
    }else{
	  var delay = user_doc.gps_delay
      cb(null,delay);
    }
  });
};