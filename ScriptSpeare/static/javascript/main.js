// Initialize the important structures
$(document).ready(function(){
	media = new Media($("#media"));
	clickState = new ClickState(media);
	selectState = new selectState(media);
	state = clickState;
});

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
} ;