var mongodb = require('mongodb');

module.exports.init = function (callback) {
  var server = new mongodb.Server("mongodb://ec2-54-220-99-234.eu-west-1.compute.amazonaws.com", 27017, {});
  new mongodb.Db('test', server, {w: 1}).open(function (error, client) {
    //export the client and maybe some collections as a shortcut
    module.exports.client = client;
    module.exports.myCollection = new mongodb.Collection(client, 'myCollection');
    callback(error);
  });
};