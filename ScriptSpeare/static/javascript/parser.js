﻿//Copy Pasted from the Gentle webpage
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
					start = i + 1;
					$trans.appendChild(document.createElement('br'));
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
	console.log($trans_reference.innerHTML);
};


function getTranscript(url) {
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			var jsonTrans = JSON.parse(this.responseText);
			render(jsonTrans);
		};
	};
	console.log('Making request');
	xhttp.open("GET", url, true);
	xhttp.send();
	console.log('Sent request');
};

/*
$(document).ready(function(){
	getTranscript('https://s3.eu-west-2.amazonaws.com/scriptspeare-media-files/Comedy/Merchant/MOV-1973-UK-Film-Laurence_Olivier-Joan_Plowright.json');
});*/


$(document).ready(function(){
	var url = 'https://s3.eu-west-2.amazonaws.com/scriptspeare-media-files/Comedy/Merchant/MOV-1973-UK-Film-Laurence_Olivier-Joan_Plowright.json';
	$.ajax({
        type: "GET",
        url: url,
        async:true,
        dataType : 'json',
        success: function(data) {
			console.log('ok');
			render(data);
        }
    });
});