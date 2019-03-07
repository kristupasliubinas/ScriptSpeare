function ScriptMemory(media) {
	this.script = $(".script");
	console.log(this.script);
	media.addTimeUpdate(function(event){
		media = event.data;
		time = media.getTime();
		script = $(".script");
		console.log(findLine(script, time));
    });
};

function findLine(script, time) {
	lines = script.children("a");
	curLine = null;
	var line;
	for (i = 0; i < lines.length; i++) {
		line = $(lines[i]);
		if (time <= parseTime(line.attr("end")) && curLine == null) {
			curLine = line;
			line.css( "background-color", "#aaaaaa" );
		} else {
			line.css( "background-color", "" );
		}
	};
	return curLine;
};
/*
function colourLine(line) {
	line.css( "background-color", "#aaaaaa" );
};*/