$.index.open();
var url = "ec2-54-220-99-234.eu-west-1.compute.amazonaws.com:3000/";

var client = Ti.Network.createHTTPClient({
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

var saveData = function(data) {
	client.open("POST", url);
	client.send(data);
};

function isNumber(o) {			
	if (o == undefined || o == null)
		return false;
	return typeof o == "number";
}

var stringy = function(key, value) {
	if (isNumber(value)) {
		return String(value);
	} else {
		return value;
	}
};

// demonstrates manual mode:
var providerGps = Ti.Geolocation.Android.createLocationProvider({
	name : Ti.Geolocation.PROVIDER_NETWORK,
	minUpdateDistance : 0.0,
	minUpdateTime : 0
});
Ti.Geolocation.Android.addLocationProvider(providerGps);
Ti.Geolocation.Android.manualMode = true;
var locationCallback = function(e) {
	if (!e.success || e.error) {
		alert(JSON.stringify(e.error));
		var message = JSON.stringify(e.error, stringy);
		saveData(message);
	} else {
		var message = e.coords;
		saveData(message);
	}
};

Titanium.Geolocation.addEventListener('location', locationCallback);

