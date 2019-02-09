//Copy Pasted from the Gentle webpage
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
function render(ret) {
    wds = ret['words'] || [];
    transcript = ret['transcript'];

	var $trans = $(".script")[0];
    $trans.innerHTML = '';

    var currentOffset = 0;

    wds.forEach(function(wd) {
        if(wd.case == 'not-found-in-transcript') {
            var txt = ' ' + wd.word;
            var $plaintext = document.createTextNode(txt);
            $trans.appendChild($plaintext);
            return;
        };

        // Add non-linked text
        if(wd.startOffset > currentOffset) {
            var txt = transcript.slice(currentOffset, wd.startOffset);
            var $plaintext = document.createTextNode(txt);
            $trans.appendChild($plaintext);
            currentOffset = wd.startOffset;
        };

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
