//Document for functions which change the appearance of UI element
$(document).ready(function(){
	checkEnd = function(event) {
		if (event.data.getTime() >= event.data.getDuration()) {
			$("#playbutton")[0].className = "fas fa-redo bar-button"
		};
	};
	console.log(media);
	media.addTimeUpdate(checkEnd, media);
});


function togglePauseUI(target, media) {
	playIcon = "fas fa-play-circle bar-button";
	pauseIcon = "fas fa-pause-circle bar-button";
	media.togglePause();
	if (media.paused()) {
		target.className = pauseIcon;
	} else {
		target.className = playIcon;
	};
};