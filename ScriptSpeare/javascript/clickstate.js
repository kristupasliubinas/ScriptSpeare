function ClickState(media) {
	State.call(media);
	this.click = function(time) {media.setTime(time);};
}
