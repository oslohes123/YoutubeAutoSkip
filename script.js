setInterval(function(){
    var SkipButton =  document.getElementsByClassName("ytp-ad-skip-button-slot")[0];
    if (SkipButton != null) {
    SkipButton.click();
    }	
        
    var media = document.getElementsByClassName("ytp-play-progress ytp-swatch-background-color")[0];
    var videoscreen = document.getElementsByClassName("video-stream html5-main-video")[0];
    var comp = getComputedStyle(media);
    if (comp.backgroundColor == "rgba(255, 204, 0)" || comp.backgroundColor == "rgb(255, 204, 0)") { videoscreen.currentTime = videoscreen.duration;}
    
    
    
    },1000)