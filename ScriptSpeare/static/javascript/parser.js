/*The module responsible for parsing the server side json

The function render(ret) is the main parsing function, which takes a JSON and turns it into html on the page.
Rest of the code is helper functions and functionality for setting the script location after it has been loaded.
*/

//Render is copy Pasted from the Gentle webpage and modified
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
LINE = "=line";

function render(ret) {
    wds = ret['words'] || [];
    transcript = ret['transcript'];

	var $trans = $(".script")[0];
	var htmlStack = [];
    $trans.innerHTML = '';
	var lineSwitchTime = 0;
    var currentOffset = 0;
	var curLine = 0;
	var $lineLink = pushLinkToStack(curLine, lineSwitchTime, $trans, htmlStack);
	var $lastLink = $lineLink;
	$trans = $lineLink;
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
					$trans = htmlStack.pop();
					$lastLink.setAttribute("end", lineSwitchTime);
					$lineLink = pushLinkToStack(curLine, lineSwitchTime, $trans, htmlStack)
					$lastLink = $lineLink;
					$trans = $lineLink;
					i = j;
					start = j + 1;
				} else if (c == '|') {
					 txt = txt.substr(0, i) + ' ' + txt.substr(i + 1);
				} else if (c == '<') {
					$trans = newElemenet('b', htmlStack, $trans);
					start = i + 1;
				}  else if (c == '≤' || c == '⊆') {
					$trans = $trans = newElemenet('i', htmlStack, $trans);
					start = i + 1;
				}  else if (c == '{') {
					$trans = $trans = newElemenet('h2', htmlStack, $trans);
					start = i + 1;
				}  else if (c == '(') {
					$trans = $trans = newElemenet('h1', htmlStack, $trans);
					start = i + 1;
				} else if (c == '>' || c == '≥' || c == '}' || c == ')' || c == '⊇') {
					$trans = htmlStack.pop();
					if ($trans == $(".script")[0]) {
						htmlStack.push($trans);
					};
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
        if(wd.case === 'not-found-in-audio') {
            $wd.className = 'not_in_audio';
        };
		if (wd.end != undefined) {
			lineSwitchTime = wd.end;
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
	console.log($(".script")[0].innerHTML);
	setLinkedTime();
};

function displayFetchError() {
	var $trans = $(".script")[0];
    $trans.appendChild(document.createElement('h2').appendChild(document.createTextNode('Failed to fetch the transcript')));
};

function setLinkedTime() {
	lineLink = $(window.location.hash.substring(0, window.location.hash.length - LINE.length));
	if (lineLink[0] == undefined) return;

	lineLink[0].scrollIntoView();

	time = parseInt($(lineLink.find("span")[0]).attr('start'));
	if (time) media.setTime(time);
};

function newElemenet(element, htmlStack,  $trans) {
	var $el = document.createElement(element);
	$trans.appendChild($el);
	htmlStack.push($trans);
	return $el;
};

function pushLinkToStack(curLine, lineSwitchTime, $trans, htmlStack) {
	var $lineLink = createLink(curLine, lineSwitchTime);
	$trans.appendChild($lineLink);
	htmlStack.push($trans);
	return $lineLink;
}

function createLink(curLine, lineSwitchTime) {
	var $lineLink = document.createElement('a');
	$lineLink.setAttribute("id", curLine);
	$lineLink.setAttribute("href", "#" + curLine + LINE);
	$lineLink.setAttribute("start", lineSwitchTime);
	return $lineLink;
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