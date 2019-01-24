//Document for functions which change the appearance of UI element

function togglePauseUI(target, media) {
	playIcon = "fas fa-play-circle bar-button";
	pauseIcon = "fas fa-pause-circle bar-button";
	media.togglePause();
	if (media.paused()) {
		target.className = pauseIcon;
	} else {
		target.className = playIcon;
	}
} 