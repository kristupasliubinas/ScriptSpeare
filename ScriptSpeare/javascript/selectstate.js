function selectState(media) {
	State.call(media);
	this.isStartClick = true;
	this.waitStart = 0;
	this.click = function(obj) {
		if (this.isStartClick) {
			this.waitStart = getTime(obj);
			this.isStartClick = false;
			resetColour();
		} else {
			media.setLoopStart(this.waitStart);
			media.setLoopEnd(getNextTime(obj));
			this.isStartClick = true;
			colourTextElements(media.loopStart, media.loopEnd);
		}
	};
	media.addTimeUpdate(function(event){
		media = event.data
		if (media.looping) {
			if (media.getTime() > media.loopEnd || media.getTime() < media.loopStart) media.setTime(media.loopStart);
		}
    });
}
