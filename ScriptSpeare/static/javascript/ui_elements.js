//Document for functions which change the appearance of UI element
$(document).ready(function(){
	checkEnd = function(event) {
		if (event.data.getTime() >= event.data.getDuration()) {
			$("#playbutton")[0].className = "fas fa-arrow-circle-left bar-button";
		};
	};
	media.addTimeUpdate(checkEnd, media);
});


function togglePauseUI(target, media) {
	playIcon = "fas fa-pause-circle bar-button";
	pauseIcon = "fas fa-play-circle bar-button";
	media.addTimeUpdate(function(event){
		media = event.data;
		if (media.getTime() == media.getDuration) {
			media.setTime(0);
			target.className = pauseIcon;
		};
		if (media.paused()) {
			target.className = pauseIcon;
		} else {
			target.className = playIcon;
		};
    });
};