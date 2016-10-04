function suitableImages(info,tab) {
  chrome.tabs.executeScript(tab.id,{file:"send_images.js"});
}

function appendImage(src) {
	var img = new Image(320);
	img.src = src;	
	document.getElementById("results").appendChild(img);
}

document.addEventListener('DOMContentLoaded', function() {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    suitableImages("blah",tab);
  });

});

chrome.runtime.onMessage.addListener(function(message){
  if(message.method == "suitableImages"){
    message.images.forEach(function(v){
      appendImage(v);
    });
  }
});
