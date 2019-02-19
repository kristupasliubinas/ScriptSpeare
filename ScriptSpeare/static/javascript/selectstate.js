function selectState(media) {
	State.call(media);
	this.isStartClick = true;
	this.waitStart = 0;
	this.click = function() {};
	media.addTimeUpdate(function(event){
		media = event.data
		if (media.looping) {
			if (media.getTime() > media.loopEnd || media.getTime() < media.loopStart) media.setTime(media.loopStart);
		};
    });
};

$(document).ready(function(){
	document.addEventListener("mouseup", function(){
		if (state.constructor.name == "selectState") {
			//TODO error checking
			selection = window.getSelection();
			// 4  for selecting forwards, 2 for backwards
			position = selection.anchorNode.compareDocumentPosition(selection.focusNode);
			span1 = $(getParentSpan(selection.anchorNode, position % 4));
			span2 = $(getParentSpan(selection.focusNode, (position + 2 ) % 4));

			if (!(span1 && span2)) return;

			resetColour();
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

// Position is 0 for being the fist node in the selection, 2 for being the last.
function getParentSpan(element, position) {
	if (element.parentElement.className == 'col-9 script' && element.nodeName != "SPAN") {
		if (position == 2) {
			return getParentSpan(element.nextSibling, position);
		} else {
			return getParentSpan(element.previousSibling, position);
		};
	};
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
