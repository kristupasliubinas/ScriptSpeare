/*Functionality for updating the current line.

The class ScriptMemory updates the current line.
It contains the functions for moving based on the lines.*/
function ScriptMemory(media) {
	this.line = 0;
	media.addTimeUpdate(function(event){
		media = event.data;
		time = media.getTime();
		script = $(".script");
		line = findLine(script, time);
		lineShower = $("small");
		lineShower.text("Line: " + line.line + "/" + line.count);
		globalCurrentLine = line.line;
    });

};

function findLine(script, time) {
	lines = script.children("a");
	curLine = null;
	var line;
	var i;
	for (i = 0; i < lines.length; i++) {
		line = $(lines[i]);
		if (curLine == null && time <= parseTime(line.attr("end"))) {
			curLine = line;
			line.css( "background-color", "#aaaaaa" );
		} else {
			line.css( "background-color", "" );
		}
	};
	return {line : curLine.attr("id"), count : i};
};

function moveToLine(lineNum) {
	line = $("#" + lineNum);
	line[0].scrollIntoView();
	media.setTime(line.attr("start"));
};

function skipLine(offset) {
	line = parseInt(globalCurrentLine) + parseInt(offset);
	moveToLine(line);
};