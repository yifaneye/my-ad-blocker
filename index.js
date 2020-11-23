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
			]
	},
	["blocking"]
);
