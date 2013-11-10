//$.afterland.open();
var Alloy = require('alloy');
var baseUrl = "ec2-54-220-99-234.eu-west-1.compute.amazonaws.com:3000";
var db = Ti.App.Properties;
var userLoggedInKey = "userLoggedIn";
var userToken = "userToken";

var openPage = function(pageName) {
	var page = Alloy.createController(pageName).getView();
	page.open();
};

var webClient = function(onSuccess, onError) {
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			if (onSuccess) {
				onSuccess(this.responseText);
			}
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			if (onError) {
				onError();
			}
		},
		timeout : 5000 // in milliseconds
	});
	return client;
};

var saveData = function(data, endpoint, onSuccess, onError) {
	var w = webClient(onSuccess, onError);
	w.open("POST", baseUrl + endpoint);
	w.send(data);
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

	var passwordRepeat = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '35%',
		bottom : '55%',
		left : '5%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		passwordMask : true,
		hintText : 'Repeat Password'
	});
	win.add(passwordRepeat);
	var registerButton = Titanium.UI.createButton({
		title : 'Sign Up',
		top : '45%',
		bottom : '45%',
		left : '30%',
		right : '30%'
	});
	win.add(registerButton);

	registerButton.addEventListener('click', function(e) {
		var userId = username.value;
		var userPassword = password.value;
		var userEmail = email.value;
		saveData({
			user_id : userId,
			user_pass : userPassword,
			user_mail : userEmail
		}, '/user/register', function(data) {
			db.setBool(userLoggedInKey, true);
			db.setString(userToken, userPassword);
			openPage("index");
		});
	});

	return win;
};

var loginPageWindow = function() {
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

	var password = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '15%',
		bottom : '75%',
		left : '5%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		passwordMask : true,
		hintText : 'Password'
	});
	win.add(password);

	var loginButton = Titanium.UI.createButton({
		title : 'Sign In',
		top : '25%',
		bottom : '65%',
		left : '30%',
		right : '30%'
	});
	win.add(loginButton);

	return win;
};

function tryLogin(e) {
	loginPageWindow().open();
};

function tryRegister(e) {
	registerPageWindow().open();
};

