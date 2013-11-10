var Alloy = require('alloy');
var db = Ti.App.Properties;
var userLoggedInKey = "userLoggedIn";
db.setBool(userLoggedInKey, false);

var openPage = function(pageName) {
	var page = Alloy.createController(pageName).getView();
	page.open();
};

var startMain = function() {
	openPage("main");
};
var startLanding = function() {
	openPage("landing");
};
var startPrepareLanding = function() {
	openPage("planding");
};

var userLoggedIn = db.getBool(userLoggedInKey);
if (!userLoggedIn) {
	startPrepareLanding();
} else {
	startMain();
}