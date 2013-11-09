
exports.get_info = function(params,cb){
	db.collection().findOne({'user_id':params.user_id},function(err,user_doc){
		if(err) cb(err,null);
		else{
			if(user_doc) cb(null,user_doc);
			else cb(404,null);
		}
	});
};

exports.get_homes = function(params,cb){
	db.collection('users').findOne({'user_id':params.user_id},function(err,user_doc){
		if(err) cb(err,null);
		else cb(null,user_doc.homes);
	});
};

exports.remove_home = function(params,cb){
	db.collection('users').update({'user_id':params.user_id},{$pull:{'homes':{'home_id':params.home_id}}},{safe:true},function(err,user_doc){
		if(err) cb(err,null);
		else cb(null,user_doc);
	});
};

exports.add_home = function(params,cb){
	db.collection('users').update({'user_id':params.user_id},{$push:{'homes':params.home}},{safe:true},function(err,user_doc){
		if(err) cb(err,null);
		else cb(null,err);
	});
};

exports.register = function (params,cb){
	db.collection('homes').findOne({'home_id':params.home_id,'home_pass':params.home_pass},function(err,home_doc){
		if(err) cb(err,null);
		else{
			db.collection('users').insert(params,{safe:true},function(err,user_doc){
				if(err) cb(err,null);
				else cb(null,200);
			});
		}
	})
};