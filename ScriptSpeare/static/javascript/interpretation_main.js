$(document).ready(function() {
	findElement(window.location.hash.substring(1));
});

function findElement(line) {
	$("span").each(function() {
		if ($(this).attr("line") && parseInt($(this).attr("line")) >= ParseInt(line)) {
			this.scrollToView();
			break;
		};
	}); 
};