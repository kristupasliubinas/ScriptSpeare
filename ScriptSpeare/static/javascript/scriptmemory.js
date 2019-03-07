function ScriptMemory(media) {

	media.addTimeUpdate(function(event){
		media = event.data;
		time = media.getTime();
		script = $(".script");
		line = findLine(script, time);
		lineShower = $("small");
		lineShower.text("Line: " + line.line + "/" + line.count);
		document.cookie = "line=" + line;
    });
};

function findLine(script, time) {
	lines = script.children("a");
	curLine = null;
	var line;
	var i;
	for (i = 0; i < lines.length; i++) {
		line = $(lines[i]);
		if (time <= parseTime(line.attr("end")) && curLine == null) {
			curLine = line;
			line.css( "background-color", "#aaaaaa" );
		} else {
			line.css( "background-color", "" );
		}
	};
	return {line : curLine.attr("id"), count : i};
};