//Document for functions which change the appearance of UI element

function togglePauseUI(button, media) {
	playIcon = "fas fa-play-circle bar-button";
	pauseIcon = "fas fa-pause-circle bar-button";
	media.togglePause();
	if (media.paused()) {
		console.log("Paused");
	} else {
		console.log("Playing");
	}
} 