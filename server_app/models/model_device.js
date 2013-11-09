

exports.get_info = function(params,cb){
	db.collection('devices').findOne({'user_id':params.phone_nr},function(err,dev_doc){
		if(err) cb(err,null);
		else{
			if(dev_doc) cb(null,dev_doc);
			else cb(null,404);
		}
	});
};

exports.get_homes = function(params,cb){
	db.collection('devices').findOne({'user_id':params.phone_nr},function(err,dev_doc){
		if(err) cb(err,null);
		else cb(null,dev_doc.homes);
	});
};

exports.delete_home = function(params,cb){
	db.collection('devices').update({'user_id':params.phone_nr},{$pull:{'homes':{'home_id':params.home_id}}},{safe:true},function(err,dev_doc){
		if(err) cb(err,null);
		else cb(null,dev_doc);
	});
};

exports.add_home = function(params,cb){
	db.collection('devices').update({'user_id':params.phone_nr},{$push:{'homes':params.home}},{safe:true},function(err,dev_doc){
		if(err) cb(err,null);
		else cb(null,err);
	});
};

exports.register = function (params,cb){
	db.collection('homes').findOne({'home_id':params.home_id,'home_pass':params.home_pass},function(err,home_doc){
		if(err) cb(err,null);
		else{
			db.collection('devices').insert(params,{safe:true},function(err,dev_doc){
				if(err) cb(err,null);
				else cb(null,200);
			});
		}
	})
};