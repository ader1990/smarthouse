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
        title: "Sign in"
    });
    $.__views.index.add($.__views.login);
    $.__views.register = Ti.UI.createButton({
        right: "5%",
        left: "55%",
        top: "40%",
        bottom: "50%",
        id: "register",
        title: "Don't have an account?"
    });
    $.__views.index.add($.__views.register);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Alloy = require("alloy");
    var db = Ti.App.Properties;
    var userLoggedInKey = "userLoggedIn";
    db.setBool(userLoggedInKey, false);
    var openPage = function(pageName) {
        var page = Alloy.createController(pageName).getView();
        page.open();
    };
    var startMain = function() {
        openPage("main");
    };
    var startLanding = function() {
        openPage("landing");
    };
    var userLoggedIn = db.getBool(userLoggedInKey);
    userLoggedIn ? startMain() : startLanding();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;