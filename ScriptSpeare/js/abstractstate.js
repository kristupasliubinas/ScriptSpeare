function State(media) {
	this.media = media;
	this.click = function() {;};
}

function getTime(event) {
	// Of the format HH:MM:SS,xxms
	timeStamp = event.attr("href").substring(3);
	return parseTime(timeStamp);
};

function getNextTime(event) {
	timeStamp = event.next().next("a").attr("href");
	if (timeStamp) return parseTime(timeStamp.substring(3));
	else return media.getDuration();
}

function parseTime(timeStamp) {
	hours = parseInt(timeStamp.substring(0, 2));
	minutes = parseInt(timeStamp.substring(3, 5));
	seconds = parseInt(timeStamp.substring(6, 8));
	milliseconds = parseInt(timeStamp.substring(9));
	return hours * 60 * 60 + minutes * 60 + seconds + milliseconds / 1000;
}