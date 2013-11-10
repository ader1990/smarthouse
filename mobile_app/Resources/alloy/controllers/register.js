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
        var lat = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "35%",
            bottom: "55%",
            left: "5%",
            right: "55%",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Latitude"
        });
        win.add(lat);
        var lon = Ti.UI.createTextField({
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            top: "35%",
            bottom: "55%",
            left: "45%",
            right: "5%",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Longitude"
        });
        win.add(lon);
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
    Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.info("Received text: " + this.responseText);
            alert(this.responseText);
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
        },
        timeout: 5e3
    });
    registerPageWindow().open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;