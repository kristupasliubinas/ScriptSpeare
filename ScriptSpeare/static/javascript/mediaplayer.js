/*An interface class for the webpage's media player.

This class is made to give an interface for the media player that does not depend on its implementation.
Even if the actual implementation of the media were to change, the function names here should not be changed.*/

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


	this.setPlaybackRate = function(rate) {this.htmlMedia.playbackRate = rate};
	this.loopStart = 0;
	this.loopEnd = this.htmlMedia.duration;
	this.looping = false;
	this.toggleLoop = function() {this.looping = !this.looping;};

	this.setLoop = function(t1, t2) {
		if (t1 < t2) {
			this.loopStart = t1;
			this.loopEnd = t2;
		} else {
			this.loopStart = t2;
			this.loopEnd = t1;
		};
	};
	this.addTimeUpdate = function(timeUpdate) {
		this.jQueryMedia.on("timeupdate", null, this, timeUpdate);
	};
}
