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
    $.__views.__alloyId5 = Ti.UI.createTab({
        window: $.__views.__alloyId6,
        title: "Home",
        icon: "KS_nav_views.png",
        id: "__alloyId5"
    });
    $.__views.main.addTab($.__views.__alloyId5);
    $.__views.__alloyId8 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Settings",
        id: "__alloyId8"
    });
    $.__views.__alloyId7 = Ti.UI.createTab({
        window: $.__views.__alloyId8,
        title: "Settings",
        icon: "KS_nav_views.png",
        id: "__alloyId7"
    });
    $.__views.main.addTab($.__views.__alloyId7);
    $.__views.main && $.addTopLevelView($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.main.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;