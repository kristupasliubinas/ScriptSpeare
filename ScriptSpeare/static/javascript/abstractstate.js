function State(media) {
	this.media = media;
	this.click = function() {;};
}

// TODO These are mostly mocked, change these once we have a connection to the back end.
function getTime(event) {
	// Of the format HH:MM:SS,xxms
	timeStamp = event.attr("start");
	console.log(timeStamp);
	return parseTime(timeStamp);
};

function getNextTime(event) {
	timeStamp = event.attr("end");
	if (timeStamp) return parseTime(timeStamp)
	else return media.getDuration();
}

function parseTime(timeStamp) {
	return parseFloat(timeStamp);
};