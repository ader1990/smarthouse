$.afterland.open();
var Alloy = require('alloy');
var openPage = function(pageName) {
	var page = Alloy.createController(pageName).getView();
	page.open();
};

var startRegister = function() {
	openPage("register");
};
var startLogin = function() {
	openPage("login");
};

function tryLogin(e){
	startLogin();
};

function tryRegister(e){
	startRegister();
};


