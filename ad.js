(function() {
	var ct = {};
	ct.showAd = function(div, slotId) {
		var iframe = document.createElement('iframe');
		iframe.src = 'http://cdn.download.cloudmobi.net/adsource/ad.html?slot_id=' + slotId;
		iframe.width = '100%';
		iframe.height = '100%';
		iframe.frameBorder = '0';
		iframe.scrolling = 'none';
		iframe.setAttribute('allowtransparency', 'true');
		document.getElementById(div).appendChild(iframe);
	};
	window.ct = ct;
})();
