/*The loop state.*/

function selectState(media) {
	State.call(media);
	this.isStartClick = true;
	this.waitStart = null;
	this.click = function(obj) {
		if (this.isStartClick) {
			this.waitStart = obj;
			this.isStartClick = false;
			resetColour();
			obj.css("background-color", "#ffff00");
		} else {
			if (getTime(this.waitStart) <= getTime(obj)) {
				startTime = getTime(this.waitStart);
				endTime = getNextTime(obj);
			} else {
				startTime = getTime(obj);
				endTime = getNextTime(this.waitStart);
			};
			media.setLoop(startTime, endTime);
			this.isStartClick = true;
			colourLoop(media);
		};
	};
	media.addTimeUpdate(function(event){
		media = event.data
		if (media.looping) {
			if (media.getTime() > media.loopEnd || media.getTime() < media.loopStart) media.setTime(media.loopStart);
		};
    });
};

function colourLoop(media) {
	spans = $("span");
	for (i = 0; i < spans.length; i++) {
		span = $(spans[i]);
		if (media.loopStart <= parseTime(span.attr("start")) && media.loopEnd >= parseTime(span.attr("end"))) {
			span.css( "background-color", "#dddddd" );
		};
	};
	console.log("ok");
};

function resetColour() {
	$("span").each(function() {
		if ($(this).attr("start")) {
			$(this).css( "background-color", "" );
		};
	}); 
	console.log("reset colour");
};
