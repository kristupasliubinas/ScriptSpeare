function State(media) {
	this.media = media;
	this.click = function() {
		throw "Click is not implemented in the abstract class!";
	}
}