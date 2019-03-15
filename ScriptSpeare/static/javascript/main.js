/*The class for global setting up.

Variables and functions on which the other modules rely on should be set up here.
This includes states and the media player's javascript wrapper.*/
$(document).ready(function(){
	media = new Media($("#media"));
	clickState = new ClickState(media);
	selectState = new selectState(media);
	state = clickState;
	scriptMemory = new ScriptMemory(media);
});

var globalCurrentLine;

$(document).ready(function(){
	$("a").click(function(){
		state.click($(this));
	});
});

function setState(stateString) {
	if (stateString == "select") {
		state = selectState;
	} else if (stateString == "click") {
		state = clickState;
	}
};

function getCurrentLineLink() {
	if (globalCurrentLine === undefined) return "";
	return '#' + globalCurrentLine + LINE;
};