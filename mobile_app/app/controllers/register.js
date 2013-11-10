
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

	var lat = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '35%',
		bottom : '55%',
		left : '5%',
		right : '55%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Latitude'
	});
	win.add(lat);
	
	var lon = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '35%',
		bottom : '55%',
		left : '45%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Longitude'
	});
	win.add(lon);

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
var webClient = Ti.Network.createHTTPClient({
	// function called when the response data is available
	onload : function(e) {
		Ti.API.info("Received text: " + this.responseText);
		alert(this.responseText);
	},
	// function called when an error occurs, including a timeout
	onerror : function(e) {
		Ti.API.debug(e.error);
		alert('error');
	},
	timeout : 5000 // in milliseconds
});

registerPageWindow().open();
