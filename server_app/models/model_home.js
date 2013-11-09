
exports.create = function(params,cb){

	//params = {home_prodkey,home_latitue,home_longitude}
	
	
	
	db.collection('homes').findOne({'home_prodkey':params.home_prodkey},function(err,home_doc){
		if(err) cb(err,null);
		else{
			if(home_doc) cb('Product key already in use',null);
			else{
				db.collection('homes').insert(params,function(err,home_doc){
					if(err) cb(err,null);
					else cb(null,home_doc);
				});
			}
		}
	});
};

exports.destroy = function(params,cb){
	db.collection('homes').findOne({'home_id':params.home_id},function(err,home_doc){
		if(err) cb(err,null);
		else{
			if(!home_doc) cb("No house with this home_id",null);
			else{
				db.collection('homes').findAndModify({'home_id':params.home_id},{},{},{remove:true},function(err,home_doc){
					if(err) cb(err,null);
					else cb(null,200);
				});
			}
		}
	});
};

exports.update = function(){

};

exports.get_info = function(){
	
};