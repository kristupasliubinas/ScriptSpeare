function selectState(media) {
	State.call(media);
	this.isStartClick = true;
	this.waitStart = 0;
	this.click = function() {};
	media.addTimeUpdate(function(event){
		media = event.data
		if (media.looping) {
			if (media.getTime() > media.loopEnd || media.getTime() < media.loopStart) media.setTime(media.loopStart);
		}
    });
};

$(document).ready(function(){
	document.addEventListener("mouseup", function(){
		if (state.constructor.name == "selectState") {
			//TODO error checking
			selection = window.getSelection();
			if (!selectionHasText(selection)) return;

			resetColour();
			span1 = $(getParentSpan(selection.anchorNode));
			span2 = $(getParentSpan(selection.focusNode));
			t1 = parseTime(span1.attr("start"));
			t2 = parseTime(span2.attr("start"));
			if (t1 > t2) {
				t1 = parseTime(span1.attr("end"));
			} else {
				t2 = parseTime(span2.attr("end"));
			};
			media.setLoopStart(t1);
			media.setLoopEnd(t2);
			colourLoop(media);
		};
	});
});

//TODO Change this to accept selection with one part outside of the text
function selectionHasText(selection) {
	console.log(getParentSpan(selection.anchorNode) && getParentSpan(selection.focusNode));
	return (getParentSpan(selection.anchorNode) && getParentSpan(selection.focusNode));
};

function getParentSpan(element) {
	while (element.nodeName != "SPAN") {
		element = element.parentElement;
		if (!element) return null;
	};
	return element;
};

function colourLoop(media) {
	spans = $("span");
	for (i = 0; i < spans.length; i++) {
		span = $(spans[i]);
		if (media.loopStart <= parseTime(span.attr("start")) && media.loopEnd >= parseTime(span.attr("end"))) {
			span.css( "background-color", "#aaaaaa" );
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
	console.log("reset cou");
};
