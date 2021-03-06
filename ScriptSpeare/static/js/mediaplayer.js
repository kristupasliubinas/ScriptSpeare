function Media(jQueryMedia) {
	this.htmlMedia = jQueryMedia[0];
	this.jQueryMedia = jQueryMedia;
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
	this.loopEnd = this.htmlMedia.duration;
	this.looping = false;
	this.toggleLoop = function() {this.looping = !this.looping;};

	this.setLoopStart = function(time) {this.loopStart = time;};
	this.setLoopEnd = function(time) {
		if (this.loopEnd < this.loopStart) {
			this.loopStart = this.loopEnd;
			this.loopEnd = time;
		} else {
			this.loopEnd = time; 
		}
		console.log(this.loopStart + " " + this.loopEnd);
	};
	this.addTimeUpdate = function(timeUpdate) {
		this.jQueryMedia.on("timeupdate", null, this, timeUpdate);
	};
}
