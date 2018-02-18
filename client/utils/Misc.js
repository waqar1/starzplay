export {
  isSafariBrowser,
  playVideo,
  playNativeSafari
};

function isSafariBrowser() {
  var ua = navigator.userAgent.toLowerCase(); 
  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      return false;
    } else {
      return true;
    }
  }
  return false;
}

function playVideo(url) {
  var player = dashjs.MediaPlayer().create();
  player.initialize(document.querySelector("#videoPlayer"), url, true);
  var ttmlDiv = document.querySelector("#video-caption");
  player.attachTTMLRenderingDiv(ttmlDiv);
}

function playNativeSafari(url) {
  var video = document.querySelector("#videoPlayer");
  video.setAttribute("src", url);
  video.load();
}

