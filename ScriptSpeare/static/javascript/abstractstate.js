/*Abstract class for all the script states.

Each state should inherit from the State class below.
Additionally, this module includes functions which all or most states will need.*/

function State(media) {
	this.media = media;
	this.click = function() {;};
};

function getTime(event) {
	// Of the format HH:MM:SS,xxms
	timeStamp = event.attr("start");
	return parseTime(timeStamp);
};

function getNextTime(event) {
	timeStamp = event.attr("end");
	if (timeStamp) return parseTime(timeStamp);
	else return media.getDuration();
};

function parseTime(timeStamp) {
	time = parseFloat(timeStamp);
	if (time < 0) return media.getDuration();
	else return parseFloat(timeStamp);
};