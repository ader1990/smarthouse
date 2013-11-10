function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Login",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.email = Ti.UI.createTextField({
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "10%",
        bottom: "80%",
        id: "email",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "E-mail"
    });
    $.__views.index.add($.__views.email);
    $.__views.password = Ti.UI.createTextField({
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "10%",
        bottom: "80%",
        id: "password",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        passwordMask: "true",
        hintText: "Password"
    });
    $.__views.index.add($.__views.password);
    $.__views.login = Ti.UI.createButton({
        right: "60%",
        left: "5%",
        top: "40%",
        bottom: "50%",
        id: "login",
        title: "Sign In"
    });
    $.__views.index.add($.__views.login);
    $.__views.register = Ti.UI.createButton({
        right: "60%",
        left: "5%",
        top: "40%",
        bottom: "50%",
        id: "register",
        title: "Sign Up"
    });
    $.__views.index.add($.__views.register);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Alloy = require("alloy");
    var db = Ti.App.Properties;
    var userLoggedInKey = "userLoggedIn";
    var userToken = "userToken";
    var homeIdToken = "homeIdToken";
    var homeNameToken = "homeNameToken";
    var latitudeToken = "latitudeToken";
    var longitudeToken = "longitudeToken";
    var roomsToken = "roomsToken";
    db.setBool(userLoggedInKey, true);
    db.setString(userToken, "id1");
    var baseUrl = "ec2-54-220-99-234.eu-west-1.compute.amazonaws.com:3000";
    var webClient = function(onSuccess, onError) {
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                onSuccess && onSuccess(this.responseText);
            },
            onerror: function() {
                onError && onError();
            },
            timeout: 5e3
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
    var startAfterLanding = function() {
        openPage("afterland");
    };
    var userLoggedIn = db.getBool(userLoggedInKey);
    if (userLoggedIn) {
        var homeWindow = Titanium.UI.createWindow({
            backgroundColor: "#fff"
        });
        var statusWindow = Titanium.UI.createWindow({
            backgroundColor: "#fff"
        });
        var tabGroup = Titanium.UI.createTabGroup({
            window: homeWindow
        });
        var homeTab = Titanium.UI.createTab({
            window: homeWindow,
            title: "Home",
            icon: "KS_nav_views.png"
        });
        var homeName = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "5%",
            bottom: "85%",
            left: "5%",
            right: "5%",
            value: db.getString(homeNameToken),
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Home Name"
        });
        homeWindow.add(homeName);
        var homeId = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "15%",
            bottom: "75%",
            left: "5%",
            right: "5%",
            value: db.getString(homeIdToken),
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Product Key"
        });
        homeWindow.add(homeId);
        var lat = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "25%",
            bottom: "65%",
            left: "5%",
            right: "55%",
            value: db.getString(latitudeToken),
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Latitude"
        });
        homeWindow.add(lat);
        var lon = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "25%",
            bottom: "65%",
            left: "45%",
            right: "5%",
            value: db.getString(longitudeToken),
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Longitude"
        });
        homeWindow.add(lon);
        var rooms = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "35%",
            bottom: "55%",
            left: "5%",
            right: "55%",
            value: db.getString(roomsToken),
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Rooms"
        });
        homeWindow.add(rooms);
        var living = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "35%",
            bottom: "55%",
            left: "45%",
            right: "5%",
            value: "Yes",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Has Livingroom"
        });
        homeWindow.add(living);
        var updateButton = Titanium.UI.createButton({
            title: "Save",
            top: "45%",
            bottom: "45%",
            left: "30%",
            right: "30%"
        });
        homeWindow.add(updateButton);
        updateButton.addEventListener("click", function() {
            var userIdVal = db.getString(userToken);
            var homeIdVal = homeId.value;
            var latitude = lat.value;
            var longitude = lon.value;
            var roomsVal = rooms.value;
            saveData({
                user_id: userIdVal,
                home_id: homeIdVal,
                home_lat: latitude,
                home_long: longitude,
                nr_rooms: roomsVal,
                lr_bool: 0,
                home_type: 1
            }, "/user/set_home", function() {
                db.setString(homeIdToken, homeIdVal);
                db.setString(latitudeToken, latitude);
                db.setString(longitudeToken, longitude);
                db.setString(roomsToken, roomsVal);
                alert("Info saved!");
            }, function() {
                alert("Data could not be saved");
            });
        });
        tabGroup.addTab(homeTab);
        var statusTab = Titanium.UI.createTab({
            window: statusWindow,
            title: "Status",
            icon: "KS_nav_views.png"
        });
        tabGroup.addTab(statusTab);
        tabGroup.open();
    } else startAfterLanding();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;