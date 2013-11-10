//$.main.open();

var homeWindow = Titanium.UI.createWindow({
	title : "Tabs",
	backgroundColor : '#fff'
});
/*
var statusWindow = Titanium.UI.createWindow({
	title : "Cabs",
	backgroundColor : '#fff'
});
var settingsWindows = Titanium.UI.createWindow({
	title : "Pubs",
	backgroundColor : '#fff'
});
*/

var tabGroup = Titanium.UI.createTabGroup({
	title : "hello",
	icon : "KS_nav_views.png",
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
homeTab.add(homeName);

var homeId = Ti.UI.createTextField({
	autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
	top : '15%',
	bottom : '75%',
	left : '5%',
	right : '5%',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : 'Product Key'
});
homeTab.add(homeId);

var lat = Ti.UI.createTextField({
	autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
	top : '25%',
	bottom : '65%',
	left : '5%',
	right : '55%',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : 'Latitude'
});
homeTab.add(lat);

var lon = Ti.UI.createTextField({
	autocapitalization : Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
	top : '25%',
	bottom : '65%',
	left : '45%',
	right : '5%',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : 'Longitude'
});
homeTab.add(lon);

tabGroup.addTab(homeTab);

var statusTab = Titanium.UI.createTab({
	window : statusWindow,
	title : 'Status',
	icon : 'KS_nav_views.png'
});
tabGroup.addTab(statusTab);


tabGroup.open();
