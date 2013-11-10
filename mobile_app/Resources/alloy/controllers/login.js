function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Login",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.emailLogin = Ti.UI.createTextField({
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "5%",
        bottom: "85%",
        id: "emailLogin",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "E-mail"
    });
    $.__views.login.add($.__views.emailLogin);
    $.__views.passwordLogin = Ti.UI.createTextField({
        color: "#336699",
        right: "5%",
        left: "5%",
        top: "15%",
        bottom: "75%",
        id: "passwordLogin",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        passwordMask: "true",
        hintText: "Password"
    });
    $.__views.login.add($.__views.passwordLogin);
    $.__views.submitLogin = Ti.UI.createButton({
        right: "30%",
        left: "30%",
        top: "25%",
        bottom: "65%",
        id: "submitLogin",
        title: "Sign In"
    });
    $.__views.login.add($.__views.submitLogin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.login.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;