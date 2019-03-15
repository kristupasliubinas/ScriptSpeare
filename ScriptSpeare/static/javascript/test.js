//Tests for the media player with a mock html object

QUnit.test( "Loop sets start correctly", function( assert ) {
	video = [{ duration : 40}]
	media = new Media(video);
	media.setLoop(23, 25);
	assert.ok(media.loopStart == 23, "Passed!" );
});

QUnit.test( "Loop sets end correctly", function( assert ) {
	video = [{ duration : 40}]
	media = new Media(video);
	media.setLoop(23, 25);
	assert.ok(media.loopEnd == 25, "Passed!" );
});

QUnit.test( "Loop sets end correctly when the items are not ordered", function( assert ) {
	video = [{ duration : 40}]
	media = new Media(video);
	media.setLoop(25, 23);
	assert.ok(media.loopEnd == 25, "Passed!" );
});

QUnit.test( "Loop sets start correctly when the items are not ordered", function( assert ) {
	video = [{ duration : 40}]
	media = new Media(video);
	media.setLoop(25, 23);
	assert.ok(media.loopStart == 23, "Passed!" );
});

QUnit.test( "Default loop starts at 0", function( assert ) {
	video = [{ duration : 40}]
	media = new Media(video);
	assert.ok(media.loopStart == 0, "Passed!" );
});

QUnit.test( "Default loop ends at the duration", function( assert ) {
	video = [{ duration : 40}]
	media = new Media(video);
	assert.ok(media.loopEnd == 40, "Passed!" );
});

QUnit.test( "Toggle pause calls play when the media is paused", function( assert ) {
	playCalled = false;
	video = [{paused : true, play : function() {playCalled = true;}, pause : function() {;}}];
	media = new Media(video);
	media.togglePause();
	assert.ok(playCalled, "Passed!" );
});

QUnit.test( "Toggle pause calls pause when the media is playing", function( assert ) {
	pauseCalled = false;
	video = [{paused : false, pause : function() {pauseCalled = true;}, play : function() {;}}];
	media = new Media(video);
	media.togglePause();
	assert.ok(pauseCalled, "Passed!" );
});