chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.getSelected(null, function(tab) {
		var tabId = tab.id;
	});
	var tmp = document.createElement ('a');
	var url = tab.url;
	final_url = 'http://web.archive.org/web/*/'+url;
	chrome.tabs.create({'url': final_url}, function(tab) {});
});

