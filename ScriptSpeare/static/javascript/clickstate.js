function ClickState(media) {
	State.call(media);
	this.click = function(obj) {media.setTime(getTime(obj));};
}
