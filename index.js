"use strict";

chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		return {cancel: true};
	},
	{
		urls:
			[
				"*://*.doubleclick.net/*",
				"*://*.googleadservices.com/*",
				"*://*.googlesyndication.com/*",
				"*://*.2mdn.net/*",
				"*://*.trafficjunky.net/*",
				"*://*.adtng.com/*",
				"*://*.vfthr.com/*",
				"*://*.adiktivebanners.com/*",
				"*://*.n1272serv.xyz/*",
				"*://*.2020mustang.com/*",
			],
		types: ['sub_frame']
	},
	["blocking"]
);
