//Copy Pasted from the Gentle webpage
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//Copy Pasted from the Gentle webpage
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
function render(ret) {
    wds = ret['words'] || [];
    transcript = ret['transcript'];

	var $trans = $(".script")[0];
	var $trans_reference = $trans;
    $trans.innerHTML = '';

    var currentOffset = 0;

    wds.forEach(function(wd) {
        if(wd.case == 'not-found-in-transcript') {
            // TODO: show phonemes somewhere
            var txt = ' ' + wd.word;
            var $plaintext = document.createTextNode(txt);
            $trans.appendChild($plaintext);
            return;
        }

        // Add non-linked text
        if(wd.startOffset > currentOffset) {
            var txt = transcript.slice(currentOffset, wd.startOffset);
			var start = 0;
			for (var i = 0; i<txt.length; i++){
				var c = txt.charAt(i);
				if (c == '\n') {
					var $plaintext = document.createTextNode(txt.slice(start, i));
					$trans.appendChild($plaintext);
					start = i + 1;
					$trans.appendChild(document.createElement('br'));
				} else if (c == '<') {
					var $bold = document.createElement('b');
					$trans.appendChild($bold);
					$trans = $bold;
					start = i + 1;
				} else if (c == '>') {
					$trans = $trans_reference;
					$trans.appendChild(document.createTextNode(' '));
					start = 1 + i;
				} else if (c == '≤') {
					var $italic = document.createElement('i');
					$trans.appendChild($italic);
					$trans = $italic;
					start = i + 1;
				} else if (c == '≥') {
					$trans = $trans_reference;
					start = 1 + i;
				};
			};
            var $plaintext = document.createTextNode(txt.slice(start));
            $trans.appendChild($plaintext);
            currentOffset = wd.startOffset;
        }

        var $wd = document.createElement('span');
        var txt = transcript.slice(wd.startOffset, wd.endOffset);
        var $wdText = document.createTextNode(txt);
        $wd.appendChild($wdText);
        wd.$div = $wd;
        if(wd.start !== undefined) {
            $wd.className = 'success';
        };
		$wd.setAttribute("start", wd.start);
		$wd.setAttribute("end", wd.end);
        $wd.onclick = function() {state.click($(this))};
        $trans.appendChild($wd);
        currentOffset = wd.endOffset;
    });

    var txt = transcript.slice(currentOffset, transcript.length);
    var $plaintext = document.createTextNode(txt);
    $trans.appendChild($plaintext);
    currentOffset = transcript.length;
};


$(document).ready(function(){
	render(JSON);
});
