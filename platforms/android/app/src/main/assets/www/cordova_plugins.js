cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-app-version.AppVersionPlugin",
      "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
      "pluginId": "cordova-plugin-app-version",
      "clobbers": [
        "cordova.getAppVersion"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
      "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
      "pluginId": "cordova-plugin-facebook4",
      "clobbers": [
        "facebookConnectPlugin"
      ]
    },
    {
      "id": "cordova-plugin-googleplus.GooglePlus",
      "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
      "pluginId": "cordova-plugin-googleplus",
      "clobbers": [
        "window.plugins.googleplus"
      ]
    },
    {
      "id": "cordova-plugin-headercolor.HeaderColor",
      "file": "plugins/cordova-plugin-headercolor/www/HeaderColor.js",
      "pluginId": "cordova-plugin-headercolor",
      "clobbers": [
        "cordova.plugins.headerColor"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-nativeaudio.nativeaudio",
      "file": "plugins/cordova-plugin-nativeaudio/www/nativeaudio.js",
      "pluginId": "cordova-plugin-nativeaudio",
      "clobbers": [
        "window.plugins.NativeAudio"
      ]
    },
    {
      "id": "cordova-plugin-sign-in-with-apple.SignInWithApple",
      "file": "plugins/cordova-plugin-sign-in-with-apple/www/sign-in-with-apple.js",
      "pluginId": "cordova-plugin-sign-in-with-apple",
      "clobbers": [
        "cordova.plugins.SignInWithApple"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-x-socialsharing.SocialSharing",
      "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
      "pluginId": "cordova-plugin-x-socialsharing",
      "clobbers": [
        "window.plugins.socialsharing"
      ]
    },
    {
      "id": "parse-push-plugin.ParsePushPlugin",
      "file": "plugins/parse-push-plugin/www/parse-push-plugin.js",
      "pluginId": "parse-push-plugin",
      "clobbers": [
        "ParsePushPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-androidx": "2.0.0",
    "cordova-plugin-androidx-adapter": "1.1.1",
    "cordova-plugin-app-version": "0.1.9",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-facebook4": "6.4.0",
    "cordova-plugin-googleplus": "8.5.0",
    "cordova-plugin-headercolor": "1.0",
    "cordova-plugin-inappbrowser": "4.0.0",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "5.0.0",
    "cordova-plugin-nativeaudio": "3.0.9",
    "cordova-plugin-sign-in-with-apple": "0.0.1",
    "cordova-plugin-splashscreen": "5.0.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-whitelist": "1.3.4",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "5.6.8",
    "parse-push-plugin": "1.0.8"
  };
});