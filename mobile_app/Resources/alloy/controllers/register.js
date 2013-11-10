function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "register";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.register = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Register",
        id: "register"
    });
    $.__views.register && $.addTopLevelView($.__views.register);
    $.__views.nameRegister = Ti.UI.createTextField({
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "5%",
        bottom: "85%",
        id: "nameRegister",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Name"
    });
    $.__views.register.add($.__views.nameRegister);
    $.__views.emailRegister = Ti.UI.createTextField({
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "15%",
        bottom: "75%",
        id: "emailRegister",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "E-mail"
    });
    $.__views.register.add($.__views.emailRegister);
    $.__views.passwordRegister = Ti.UI.createTextField({
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "25%",
        bottom: "65%",
        id: "passwordRegister",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        passwordMask: "true",
        hintText: "Password"
    });
    $.__views.register.add($.__views.passwordRegister);
    $.__views.postcodeRegister = Ti.UI.createTextField({
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "35%",
        bottom: "55%",
        id: "postcodeRegister",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Postcode"
    });
    $.__views.register.add($.__views.postcodeRegister);
    $.__views.prodcutCodeRegister = Ti.UI.createTextField({
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "45%",
        bottom: "45%",
        id: "prodcutCodeRegister",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Product Code"
    });
    $.__views.register.add($.__views.prodcutCodeRegister);
    $.__views.submitLogin = Ti.UI.createButton({
        right: "30%",
        left: "30%",
        top: "55%",
        bottom: "35%",
        id: "submitLogin",
        title: "Sign Up"
    });
    $.__views.register.add($.__views.submitLogin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.register = function() {
        alert("ddd");
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;