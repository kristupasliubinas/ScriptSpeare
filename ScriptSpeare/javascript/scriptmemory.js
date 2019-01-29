function ScriptMemory(media, script) {
	media.addTimeUpdate(function(event){
		media = event.data
		if (media.looping) {
			if (media.getTime() > media.loopEnd || media.getTime() < media.loopStart) media.setTime(media.loopStart);
		}
    });
};
