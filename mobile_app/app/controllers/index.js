var Alloy = require('alloy');

var db = Ti.App.Properties;
var userLoggedInKey = "userLoggedIn";
var userToken = "userToken";
db.setBool(userLoggedInKey, true);
db.setString(userToken, "id1");
var baseUrl = "ec2-54-220-99-234.eu-west-1.compute.amazonaws.com:3000";

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
var startAfterLanding = function() {
	openPage("afterland");
};

var userLoggedIn = db.getBool(userLoggedInKey);
if (!userLoggedIn) {
	startAfterLanding();
} else {

	var homeWindow = Titanium.UI.createWindow({
		backgroundColor : '#fff'
	});

	var tabGroup = Titanium.UI.createTabGroup({
		window : homeWindow
	});

	var homeTab = Titanium.UI.createTab({
		window : homeWindow,
		title : 'Home',
		icon : 'KS_nav_views.png'
	});

	var homeName = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '5%',
		bottom : '85%',
		left : '5%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Home Name'
	});
	homeWindow.add(homeName);

	var homeId = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '15%',
		bottom : '75%',
		left : '5%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Product Key'
	});
	homeWindow.add(homeId);

	var lat = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '25%',
		bottom : '65%',
		left : '5%',
		right : '55%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Latitude'
	});
	homeWindow.add(lat);

	var lon = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '25%',
		bottom : '65%',
		left : '45%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Longitude'
	});
	homeWindow.add(lon);

	var rooms = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '35%',
		bottom : '55%',
		left : '5%',
		right : '55%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Rooms'
	});
	homeWindow.add(rooms);

	var living = Ti.UI.createTextField({
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
		top : '35%',
		bottom : '55%',
		left : '45%',
		right : '5%',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText : 'Has Livingroom'
	});
	homeWindow.add(living);
	var updateButton = Titanium.UI.createButton({
		title : 'Save',
		top : '45%',
		bottom : '45%',
		left : '30%',
		right : '30%'
	});
	homeWindow.add(updateButton);

	updateButton.addEventListener('click', function(e) {
		var userIdVal = db.getString(userToken);
		var homeIdVal = homeId.value;
		var latitude = lat.value;
		var longitude = lon.value;
		var roomsVal = rooms.value;
		saveData({
			user_id : userIdVal,
			home_id : homeIdVal,
			home_lat : latitude,
			home_long : longitude,
			nr_rooms : roomsVal,
			lr_bool : true,
			home_type : 1
		}, "/user/set_home", function(data) {
			alert("Info saved!");
		});

	});

	tabGroup.addTab(homeTab);

	var statusTab = Titanium.UI.createTab({
		window : homeWindow,
		title : 'Status',
		icon : 'KS_nav_views.png'
	});
	tabGroup.addTab(statusTab);

	tabGroup.open();
}