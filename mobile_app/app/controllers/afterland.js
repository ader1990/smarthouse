$.afterland.open();
var Alloy = require('alloy');
var openPage = function(pageName) {
	var page = Alloy.createController(pageName).getView();
	page.open();
};

var registerPageWindow = function() {
	var win = Titanium.UI.createWindow({
		title : "Register",
		backgroundColor : '#fff'
	});

	var username = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '5%',
		bottom : '85%',
		left : '5%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Username'
	});
	win.add(username);

	var email = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '15%',
		bottom : '75%',
		left : '5%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'E-mail'
	});
	win.add(email);

	var password = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '25%',
		bottom : '65%',
		left : '5%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		passwordMask : true,
		hintText : 'Password'
	});
	win.add(password);

	var postcode = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '35%',
		bottom : '55%',
		left : '5%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Postcode'
	});
	win.add(postcode);

	var productCode = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '45%',
		bottom : '45%',
		left : '5%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Product Code'
	});
	win.add(productCode);

	var registerButton = Titanium.UI.createButton({
		title : 'Sign Up',
		top : '55%',
		bottom : '35%',
		left : '30%',
		right : '30%'
	});
	win.add(registerButton);

	return win;
};

var startRegister = function() {
	registerPageWindow().open();
};
var startLogin = function() {
	openPage("login");
};
function tryLogin(e) {
	startLogin();
};

function tryRegister(e) {
	startRegister();
};

