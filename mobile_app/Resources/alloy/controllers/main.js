function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createTabGroup({
        id: "main"
    });
    $.__views.__alloyId6 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Home",
        id: "__alloyId6"
    });
    $.__views.__alloyId7 = Ti.UI.createWebView({
        src: "temperature.html",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId5 = Ti.UI.createTab({
        window: $.__views.__alloyId6,
        title: "Home",
        icon: "KS_nav_views.png",
        id: "__alloyId5"
    });
    $.__views.main.addTab($.__views.__alloyId5);
    $.__views.__alloyId9 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Home",
        id: "__alloyId9"
    });
    $.__views.__alloyId10 = Ti.UI.createWebView({
        src: "temperature.html",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId8 = Ti.UI.createTab({
        window: $.__views.__alloyId9,
        title: "Status",
        icon: "KS_nav_views.png",
        id: "__alloyId8"
    });
    $.__views.main.addTab($.__views.__alloyId8);
    $.__views.__alloyId12 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Settings",
        id: "__alloyId12"
    });
    $.__views.__alloyId11 = Ti.UI.createTab({
        window: $.__views.__alloyId12,
        title: "Settings",
        icon: "KS_nav_views.png",
        id: "__alloyId11"
    });
    $.__views.main.addTab($.__views.__alloyId11);
    $.__views.main && $.addTopLevelView($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var homeWindow = Titanium.UI.createWindow({
        title: "Tabs",
        backgroundColor: "#fff"
    });
    var tabGroup = Titanium.UI.createTabGroup({
        title: "hello",
        icon: "KS_nav_views.png"
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
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Home Name"
    });
    homeTab.add(homeName);
    var homeId = Ti.UI.createTextField({
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
        top: "15%",
        bottom: "75%",
        left: "5%",
        right: "5%",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Product Key"
    });
    homeTab.add(homeId);
    var lat = Ti.UI.createTextField({
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
        top: "25%",
        bottom: "65%",
        left: "5%",
        right: "55%",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Latitude"
    });
    homeTab.add(lat);
    var lon = Ti.UI.createTextField({
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
        top: "25%",
        bottom: "65%",
        left: "45%",
        right: "5%",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Longitude"
    });
    homeTab.add(lon);
    tabGroup.addTab(homeTab);
    var statusTab = Titanium.UI.createTab({
        window: statusWindow,
        title: "Status",
        icon: "KS_nav_views.png"
    });
    tabGroup.addTab(statusTab);
    tabGroup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;