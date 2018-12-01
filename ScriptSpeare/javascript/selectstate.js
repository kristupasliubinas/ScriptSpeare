function selectState(media) {
	State.call(media);
	this.isStartClick = true;
	this.click = function(obj) {
		if (this.isStartClick) {
			media.setLoopStart(getTime(obj));
			this.isStartClick = false;
		} else {
			media.setLoopEnd(getNextTime(obj));
			this.isStartClick = true;
		}
	};
	media.addTimeUpdate(function(event){
		media = event.data
		if (media.looping) {
			if (media.getTime() > media.loopEnd || media.getTime() < media.loopStart) media.setTime(media.loopStart);
		}
    });
}
