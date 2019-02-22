function ClickState(media) {
	State.call(media);
	this.click = function(obj) {
		time = getTime(obj);
		console.log(time, media.getTime());
		media.setTime(time);
		console.log(media.getTime());
	};
}
