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
    $.__views.textField1 = Ti.UI.createTextField({
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "10%",
        bottom: "80%",
        id: "textField1",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "E-mail"
    });
    $.__views.register.add($.__views.textField1);
    $.__views.textField2 = Ti.UI.createTextField({
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "25%",
        bottom: "65%",
        id: "textField2",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        passwordMask: "true",
        hintText: "Password"
    });
    $.__views.register.add($.__views.textField2);
    $.__views.login = Ti.UI.createButton({
        right: "60%",
        left: "5%",
        top: "40%",
        bottom: "50%",
        id: "login",
        title: "Sign in"
    });
    $.__views.register.add($.__views.login);
    $.__views.register = Ti.UI.createButton({
        right: "5%",
        left: "55%",
        top: "40%",
        bottom: "50%",
        id: "register",
        title: "Don't have an account?"
    });
    $.__views.register.add($.__views.register);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.register.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;