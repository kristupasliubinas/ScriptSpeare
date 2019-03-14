//Document for functions which change the appearance of UI element
$(document).ready(function(){
	checkEnd = function(event) {
		if (event.data.getTime() >= event.data.getDuration()) {
			$("#playbutton")[0].className = "fas fa-arrow-circle-left bar-button";
		};
	};
	media.addTimeUpdate(checkEnd, media);
	media.addTimeUpdate(togglePauseUI, media);
});

function togglePauseUI(event) {
	playIcon = "fas fa-pause-circle bar-button";
	pauseIcon = "fas fa-play-circle bar-button";
	media = event.data;
	targets = [$("#playbutton")[0],  $("#overlay-play")[0]];
	targets.forEach(function(target) {
		if (media.getTime() >= media.getDuration) {
			media.setTime(0);
			target.className = pauseIcon;
		};
		if (media.paused() && target.className != pauseIcon) {
			target.className = pauseIcon;
		} else if (target.className != playIcon){
			target.className = playIcon;
		};
	});
};