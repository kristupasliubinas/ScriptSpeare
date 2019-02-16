//Copy Pasted from the Gentle webpage
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

function render(ret) {
    wds = ret['words'] || [];
    transcript = ret['transcript'];

	var $trans = $(".script")[0];
    $trans.innerHTML = '';



	html = '';
	oM = new OffsetMover(transcript);

	//Add the html before the first word
	currentOffset = wds[0].startOffset
	var txt = transcript.slice(0, oM.get_offset(currentOffset));
	html += txt;

    wds.forEach(function(wd) {
        if(wd.case == 'not-found-in-transcript') {
            var txt = ' ' + wd.word;
			html += txt;
            return;
        };

        // Add non-linked text
        if(wd.startOffset > currentOffset) {
            var txt = transcript.slice(oM.get_offset(currentOffset), oM.get_offset(wd.startOffset));
			html += txt;
            currentOffset = wd.startOffset;
        };

			var $wd = document.createElement('span');
			var txt = transcript.slice(oM.get_offset(wd.startOffset), oM.get_offset(wd.endOffset));
			var $wdText = document.createTextNode(txt);
			$wd.appendChild($wdText);
			wd.$div = $wd;
			if(wd.start !== undefined) {
				$wd.className = 'success';
			};
			$wd.setAttribute("start", wd.start);
			$wd.setAttribute("end", wd.end);
			html += $wd.outerHTML;
			currentOffset = wd.endOffset;
    });

    var txt = transcript.slice(oM.get_offset(currentOffset), oM.get_offset(transcript.length));
	html += txt;
    currentOffset = transcript.length;
	$trans.innerHTML = html;

	$trans.childNodes.forEach(function(element) {
		if (element.nodeName == "SPAN") {
			element.onclick = function() {state.click($(element))};
		};
	});
	console.log($trans.innerHTML);
};

function OffsetMover(transcript) {
	this.transcript = transcript;
	this.cur_transcript_loc = 0;
	this.in_html_tag = (transcript.charAt(this.cur_transcript_loc) == '<');
	if (this.in_html_tag) {
		this.cur_word_loc = 0;
	} else {
		this.cur_word_loc = 1;
	};
	this.get_offset = function(loc) {
		if (loc < this.cur_word_loc) throw "Invalid index " + loc + ", the current location is " + this.cur_word_loc; 
		var c;
		while (this.cur_word_loc < loc) {
			c = transcript.charAt(this.cur_transcript_loc);
			if (this.in_html_tag && c == '>') {
				this.in_html_tag = false;
			} else if (!this.in_html_tag && c == '<') {
				this.in_html_tag = true;
			} else if (!this.in_html_tag) {
				this.cur_word_loc += 1;
			};
			this.cur_transcript_loc += 1;
		};
		if (loc < 100) console.log(loc, this.cur_transcript_loc);
		return this.cur_transcript_loc;
	};
	console.log('created OffsetMover');
};

$(document).ready(function(){
	render(JSON);
});