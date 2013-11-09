
exports.testAdd = function(db,data,cb){
	console.log('fired testAdd');
	console.log(data);
	db.collection('testData').insert(data,function(err,doc){
		if(err) console.log(err);
		else cb(null,200);
	});
};