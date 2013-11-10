//$.register.open();
function register(_args) {
	var win = Titanium.UI.createWindow({
		title : "Register",
		backgroundColor : '#fff'
	});

	var username = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		width : 300,
		top : 10,
		height : 45,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Smarthouse Username'
	});
	win.add(username);

	var password = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		width : 300,
		top : 65,
		height : 45,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		passwordMask : true,
		hintText : 'Password'
	});

	win.add(password);
	return win;
};
exports.register = function(){
	alert("ddd");
};
