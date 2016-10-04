var images = [];
var imgElements = document.getElementsByTagName('img');
for (var index in imgElements) {
  var img = imgElements[index];
  var imgWidth = img.width;
  if (imgWidth > 319) {
    images.push(img.src);
  }
}
chrome.runtime.sendMessage({method:"suitableImages",images:images});
