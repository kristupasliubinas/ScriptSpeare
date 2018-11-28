function Media(jQueryMedia) {
	this.htmlMedia = jQueryMedia[0];
	this.setTime = function(time) {this.htmlMedia.currentTime = time;};
	this.getTime = function() {return this.htmlMedia.currentTime;};
	this.getDuration = function() {return this.htmlMedia.duration;};
	this.play = function() {this.htmlMedia.play()};
	this.pause = function() {this.htmlMedia.pause()};
	this.togglePause = function() {
		if (this.htmlMedia.paused) this.play();
		else this.pause();
	};
	this.paused = function() {return this.htmlMedia.paused;};

	this.loopStart = 0;
	this.loopEnd = 0;
	this.looping = false;

	this.setLoop = function(start, end) {
		this.loopStart = start;
		this.loopEnd = end;
		this.looping = true;
	}
	this.stopLoop = function() {this.looping = false;}

	this.timeUpdates = [];
	this.addTimeUpdate = function(timeUpdate) {this.timeUpdates.push(timeUpdate);};
	jQueryMedia.on("timeupdate", null, this, function(event){
		media = event.data

		if (media.looping) {
			if (media.getTime() > media.loopEnd) media.setTime(media.loopStart);
		}

		for (i = 0; i < media.timeUpdates.length; i++) {
			media.timeUpdates[i]();
		}
    });
}
