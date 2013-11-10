function Controller() {
    function tryLogin() {
        startLogin();
    }
    function tryRegister() {
        startRegister();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "afterland";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
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
        top: "12%",
        width: "300dp",
        height: "200dp",
        text: "99.9F°",
        left: "45%",
        color: "red",
        fonttext: "bold",
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
        fontSize: "50dp",
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
    $.__views.tryLogin = Ti.UI.createButton({
        right: "15%",
        left: "15%",
        top: "70%",
        bottom: "20%",
        id: "tryLogin",
        title: "Sign In",
        width: "70%"
    });
    $.__views.afterland.add($.__views.tryLogin);
    tryLogin ? $.__views.tryLogin.addEventListener("click", tryLogin) : __defers["$.__views.tryLogin!click!tryLogin"] = true;
    $.__views.tryRegister = Ti.UI.createButton({
        right: "15%",
        left: "15%",
        top: "80%",
        bottom: "10%",
        id: "tryRegister",
        title: "Sign Up",
        width: "70%"
    });
    $.__views.afterland.add($.__views.tryRegister);
    tryRegister ? $.__views.tryRegister.addEventListener("click", tryRegister) : __defers["$.__views.tryRegister!click!tryRegister"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.afterland.open();
    var Alloy = require("alloy");
    var openPage = function(pageName) {
        var page = Alloy.createController(pageName).getView();
        page.open();
    };
    var registerPageWindow = function() {
        var win = Titanium.UI.createWindow({
            title: "Register",
            backgroundColor: "#fff"
        });
        var username = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "5%",
            bottom: "85%",
            left: "5%",
            right: "5%",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Username"
        });
        win.add(username);
        var email = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "15%",
            bottom: "75%",
            left: "5%",
            right: "5%",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "E-mail"
        });
        win.add(email);
        var password = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "25%",
            bottom: "65%",
            left: "5%",
            right: "5%",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            passwordMask: true,
            hintText: "Password"
        });
        win.add(password);
        var postcode = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "35%",
            bottom: "55%",
            left: "5%",
            right: "5%",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Postcode"
        });
        win.add(postcode);
        var productCode = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "45%",
            bottom: "45%",
            left: "5%",
            right: "5%",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Product Code"
        });
        win.add(productCode);
        var registerButton = Titanium.UI.createButton({
            title: "Sign Up",
            top: "55%",
            bottom: "35%",
            left: "30%",
            right: "30%"
        });
        win.add(registerButton);
        return win;
    };
    var startRegister = function() {
        registerPageWindow().open();
    };
    var startLogin = function() {
        openPage("login");
    };
    __defers["$.__views.tryLogin!click!tryLogin"] && $.__views.tryLogin.addEventListener("click", tryLogin);
    __defers["$.__views.tryRegister!click!tryRegister"] && $.__views.tryRegister.addEventListener("click", tryRegister);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;