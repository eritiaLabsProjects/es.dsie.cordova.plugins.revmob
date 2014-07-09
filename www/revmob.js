var RevMob = function() {};
RevMob.prototype.TEST_DISABLED = 0;
RevMob.prototype.TEST_WITH_ADS = 1;
RevMob.prototype.TEST_WITHOUT_ADS = 2;

RevMob.prototype.startSession= function(appId) {
    cordova.exec(function(successParams){}, function(errorParams){}, "RevMobPlugin", "startSession", [appId]);
  };

RevMob.prototype.showFullscreen = function(successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "RevMobPlugin", "showFullscreen", []);
	};

RevMob.prototype.openAdLink = function(successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "RevMobPlugin", "openAdLink", []);
	};

RevMob.prototype.showPopup = function(successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "RevMobPlugin", "showPopup", []);
	}

RevMob.prototype.showBanner = function(successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "RevMobPlugin", "showBanner", []);
	};

RevMob.prototype.hideBanner = function(successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "RevMobPlugin", "hideBanner", []);
	};

RevMob.prototype.setTestingMode = function(testingMode) {
		cordova.exec(null, null, "RevMobPlugin", "setTestingMode", [testingMode]);
	};

RevMob.prototype.printEnvironmentInformation = function() {
		cordova.exec(null, null, "RevMobPlugin", "printEnvironmentInformation", []);
	};

RevMob.prototype.setTimeoutInSeconds = function(seconds) {
		cordova.exec(null, null, "RevMobPlugin", "setTimeoutInSeconds", [seconds]);
	};
	


module.exports = new RevMob();
