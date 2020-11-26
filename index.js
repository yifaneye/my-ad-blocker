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
				"*://*.outbrainimg.com/*",
			],
		types: ['sub_frame', 'image', 'main_frame']
	},
	["blocking"]
);

(function set_show_iframe_listeners() {
	let iframes = document.querySelectorAll('iframe');
	iframes.forEach(iframe => {
			iframe.addEventListener('click', () => {
				iframe.focus();
			});
		}
	);
})();
