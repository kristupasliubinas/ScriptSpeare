//Copy Pasted from the Gentle webpage
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
function render(ret) {
    wds = ret['words'] || [];
    transcript = ret['transcript'];

	var $trans = $(".script")[0];
	var $trans_reference = $trans;
    $trans.innerHTML = '';

    var currentOffset = 0;
	var curLine = 0;
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
			var start = 0;
			for (var i = 0; i<txt.length; i++){
				var c = txt.charAt(i);
				if (c == '\n') {
					var $plaintext = document.createTextNode(txt.slice(start, i));
					$trans.appendChild($plaintext);
					$trans.appendChild(document.createElement('br'));
					var j;
					for (j = i + 1; txt.charAt(j) != '^'; j++) ;
					curLine = txt.slice(i + 1, j);
					i = j;
					start = j + 1;
				} else if (c == '|') {
					 txt = txt.substr(0, i) + ' ' + txt.substr(i + 1);
				} else if (c == '<') {
					var $bold = document.createElement('b');
					$trans.appendChild($bold);
					$trans = $bold;
					start = i + 1;
				}  else if (c == '≤' || c == '⊆') {
					var $italic = document.createElement('i');
					$trans.appendChild($italic);
					$trans = $italic;
					start = i + 1;
				}  else if (c == '{') {
					var $scene_header = document.createElement('h2');
					$trans.appendChild($scene_header);
					$trans = $scene_header;
					start = i + 1;
				}  else if (c == '(') {
					var $act_header = document.createElement('h1');
					$trans.appendChild($act_header);
					$trans = $act_header;
					start = i + 1;
				} else if (c == '>' || c == '≥' || c == '}' || c == ')' || c == '⊇') {
					$trans = $trans_reference;
					$trans.appendChild(document.createTextNode(' '));
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
        if(wd.start === undefined) {
            $wd.className = 'not_in_audio';
        };
		$wd.setAttribute("start", wd.start);
		$wd.setAttribute("end", wd.end);
		$wd.setAttribute("line", curLine);
        $wd.onclick = function() {state.click($(this))};
        $trans.appendChild($wd);
        currentOffset = wd.endOffset;
    });

    var txt = transcript.slice(currentOffset, transcript.length);
    var $plaintext = document.createTextNode(txt);
    $trans.appendChild($plaintext);
    currentOffset = transcript.length;
	console.log($trans_reference.innerHTML);
};

function displayFetchError() {
	var $trans = $(".script")[0];
	var $trans_reference = $trans;
    $trans.appendChild(document.createElement('h2').appendChild(document.createTextNode('Failed to fetch the transcript')));
};

function getTranscript(url) {
	console.log(url);
	$.ajax({
        type: "GET",
        url: url,
        async:true,
        dataType : 'json',
        success: function(data) {
			render(data);
        }
    }).fail(displayFetchError);
};