function Controller() {
    function isNumber(o) {
        if (void 0 == o || null == o) return false;
        return "number" == typeof o;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Login",
        id: "__alloyId2"
    });
    $.__views.textField1 = Ti.UI.createTextField({
        id: "textField1",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "E-mail",
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "10%",
        bottom: "80%"
    });
    $.__views.__alloyId2.add($.__views.textField1);
    $.__views.textField2 = Ti.UI.createTextField({
        id: "textField2",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        passwordMask: "true",
        hintText: "Password",
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "25%",
        bottom: "65%"
    });
    $.__views.__alloyId2.add($.__views.textField2);
    $.__views.login = Ti.UI.createButton({
        id: "login",
        title: "Sign in",
        right: "60%",
        left: "5%",
        top: "40%",
        bottom: "50%"
    });
    $.__views.__alloyId2.add($.__views.login);
    $.__views.register = Ti.UI.createButton({
        id: "register",
        title: "Don't have an account?",
        right: "5%",
        left: "55%",
        top: "40%",
        bottom: "50%"
    });
    $.__views.__alloyId2.add($.__views.register);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Login",
        icon: "KS_nav_ui.png",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId4 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Home",
        id: "__alloyId4"
    });
    $.__views.__alloyId3 = Ti.UI.createTab({
        window: $.__views.__alloyId4,
        title: "Home",
        icon: "KS_nav_views.png",
        id: "__alloyId3"
    });
    $.__views.index.addTab($.__views.__alloyId3);
    $.__views.__alloyId6 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Settings",
        id: "__alloyId6"
    });
    $.__views.__alloyId5 = Ti.UI.createTab({
        window: $.__views.__alloyId6,
        title: "Settings",
        icon: "KS_nav_views.png",
        id: "__alloyId5"
    });
    $.__views.index.addTab($.__views.__alloyId5);
    $.__views.index && $.addTopLevelView($.__views.index);
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