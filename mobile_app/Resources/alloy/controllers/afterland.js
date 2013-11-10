function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "afterland";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.afterland = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "AfterLand",
        id: "afterland"
    });
    $.__views.afterland && $.addTopLevelView($.__views.afterland);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/Temprico.png"
    });
    $.__views.afterland.add($.__views.image);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/place_for_degrees.png"
    });
    $.__views.afterland.add($.__views.image);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.afterland.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;