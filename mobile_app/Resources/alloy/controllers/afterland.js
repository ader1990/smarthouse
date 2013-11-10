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
        image: "/images/Temprico.png",
        top: "10%",
        left: "10%",
        right: "10%"
    });
    $.__views.afterland.add($.__views.image);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/place_for_degrees.png",
        top: "25%",
        left: "35%",
        right: "35%"
    });
    $.__views.afterland.add($.__views.image);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        top: "15%",
        width: "300dp",
        height: "200dp",
        text: "99.9F°",
        left: "45%",
        color: "red",
        fontext: "bold",
        right: "30%",
        id: "__alloyId0"
    });
    $.__views.afterland.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        top: "25%",
        width: "300dp",
        height: "200dp",
        text: "The product that",
        left: "35%",
        color: "black",
        fontext: "bold",
        right: "35%",
        id: "__alloyId1"
    });
    $.__views.afterland.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        top: "30%",
        width: "300dp",
        height: "200dp",
        text: "brings home heating",
        left: "35%",
        color: "black",
        fontext: "bold",
        right: "35%",
        id: "__alloyId2"
    });
    $.__views.afterland.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        top: "35%",
        width: "300dp",
        height: "200dp",
        text: "to the 21st century.",
        left: "35%",
        color: "black",
        fontext: "bold",
        right: "35%",
        id: "__alloyId3"
    });
    $.__views.afterland.add($.__views.__alloyId3);
    $.__views.login = Ti.UI.createButton({
        right: "30%",
        left: "30%",
        top: "70%",
        bottom: "20%",
        id: "login",
        title: "Sign in",
        width: "50%"
    });
    $.__views.afterland.add($.__views.login);
    $.__views.register = Ti.UI.createButton({
        right: "30%",
        left: "30%",
        top: "75%",
        bottom: "10%",
        id: "register",
        title: "Don't have an account?",
        width: "50%"
    });
    $.__views.afterland.add($.__views.register);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.afterland.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;