function Controller() {
    function isNumber(o) {
        if (void 0 == o || null == o) return false;
        return "number" == typeof o;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Copy of index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    var url = "ec2-54-220-99-234.eu-west-1.compute.amazonaws.com:3000/";
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.info("Received text: " + this.responseText);
            alert(this.responseText);
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
        },
        timeout: 5e3
    });
    var saveData = function(data) {
        client.open("POST", url);
        client.send(data);
    };
    var stringy = function(key, value) {
        return isNumber(value) ? String(value) : value;
    };
    var providerGps = Ti.Geolocation.Android.createLocationProvider({
        name: Ti.Geolocation.PROVIDER_NETWORK,
        minUpdateDistance: 0,
        minUpdateTime: 0
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
    Titanium.Geolocation.addEventListener("location", locationCallback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;