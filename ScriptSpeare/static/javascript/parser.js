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
            // TODO: show phonemes somewhere
            var txt = ' ' + wd.word;
            var $plaintext = document.createTextNode(txt);
            $trans.appendChild($plaintext);
            return;
        }

        // Add non-linked text
        if(wd.startOffset > currentOffset) {
            var txt = transcript.slice(currentOffset, wd.startOffset);
            var $plaintext = document.createTextNode(txt);
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

	console.log($trans);
};

INLINE_JSON = {
  "transcript": "From fairest creatures we desire increase,\r\nThat thereby beauty's rose might never die,\r\nBut as the riper should by time decease,\r\nHis tender heir might bear his memory:\r\nBut thou, contracted to thine own bright eyes,\r\nFeed'st thy light'st flame with self-substantial fuel,\r\nMaking a famine where abundance lies,\r\nThyself thy foe, to thy sweet self too cruel.\r\nThou that art now the world's fresh ornament\r\nAnd only herald to the gaudy spring,\r\nWithin thine own bud buriest thy content\r\nAnd, tender churl, makest waste in niggarding.\r\nPity the world, or else this glutton be,\r\nTo eat the world's due, by the grave and thee.\r\n",
  "words": [
    {
      "alignedWord": "from",
      "case": "success",
      "end": 0.5,
      "endOffset": 4,
      "phones": [
        {
          "duration": 0.11,
          "phone": "f_B"
        },
        {
          "duration": 0.05,
          "phone": "r_I"
        },
        {
          "duration": 0.04,
          "phone": "ah_I"
        },
        {
          "duration": 0.11,
          "phone": "m_E"
        }
      ],
      "start": 0.19,
      "startOffset": 0,
      "word": "From"
    },
    {
      "alignedWord": "fairest",
      "case": "success",
      "end": 1.25,
      "endOffset": 12,
      "phones": [
        {
          "duration": 0.17,
          "phone": "f_B"
        },
        {
          "duration": 0.19,
          "phone": "eh_I"
        },
        {
          "duration": 0.11,
          "phone": "r_I"
        },
        {
          "duration": 0.1,
          "phone": "ih_I"
        },
        {
          "duration": 0.09,
          "phone": "s_I"
        },
        {
          "duration": 0.08,
          "phone": "t_E"
        }
      ],
      "start": 0.51,
      "startOffset": 5,
      "word": "fairest"
    },
    {
      "alignedWord": "creatures",
      "case": "success",
      "end": 1.8599999999999999,
      "endOffset": 22,
      "phones": [
        {
          "duration": 0.08,
          "phone": "k_B"
        },
        {
          "duration": 0.07,
          "phone": "r_I"
        },
        {
          "duration": 0.08,
          "phone": "iy_I"
        },
        {
          "duration": 0.14,
          "phone": "ch_I"
        },
        {
          "duration": 0.11,
          "phone": "er_I"
        },
        {
          "duration": 0.12,
          "phone": "z_E"
        }
      ],
      "start": 1.26,
      "startOffset": 13,
      "word": "creatures"
    },
    {
      "alignedWord": "we",
      "case": "success",
      "end": 2.0300000000000002,
      "endOffset": 25,
      "phones": [
        {
          "duration": 0.08,
          "phone": "w_B"
        },
        {
          "duration": 0.09,
          "phone": "iy_E"
        }
      ],
      "start": 1.86,
      "startOffset": 23,
      "word": "we"
    },
    {
      "alignedWord": "desire",
      "case": "success",
      "end": 2.55,
      "endOffset": 32,
      "phones": [
        {
          "duration": 0.06,
          "phone": "d_B"
        },
        {
          "duration": 0.06,
          "phone": "ih_I"
        },
        {
          "duration": 0.13,
          "phone": "z_I"
        },
        {
          "duration": 0.18,
          "phone": "ay_I"
        },
        {
          "duration": 0.09,
          "phone": "er_E"
        }
      ],
      "start": 2.03,
      "startOffset": 26,
      "word": "desire"
    },
    {
      "alignedWord": "increase",
      "case": "success",
      "end": 3.29,
      "endOffset": 41,
      "phones": [
        {
          "duration": 0.08,
          "phone": "ih_B"
        },
        {
          "duration": 0.09,
          "phone": "n_I"
        },
        {
          "duration": 0.1,
          "phone": "k_I"
        },
        {
          "duration": 0.08,
          "phone": "r_I"
        },
        {
          "duration": 0.11,
          "phone": "iy_I"
        },
        {
          "duration": 0.28,
          "phone": "s_E"
        }
      ],
      "start": 2.55,
      "startOffset": 33,
      "word": "increase"
    },
    {
      "alignedWord": "that",
      "case": "success",
      "end": 3.94,
      "endOffset": 48,
      "phones": [
        {
          "duration": 0.09,
          "phone": "dh_B"
        },
        {
          "duration": 0.05,
          "phone": "ah_I"
        },
        {
          "duration": 0.05,
          "phone": "t_E"
        }
      ],
      "start": 3.75,
      "startOffset": 44,
      "word": "That"
    },
    {
      "alignedWord": "thereby",
      "case": "success",
      "end": 4.4,
      "endOffset": 56,
      "phones": [
        {
          "duration": 0.07,
          "phone": "dh_B"
        },
        {
          "duration": 0.07,
          "phone": "eh_I"
        },
        {
          "duration": 0.06,
          "phone": "r_I"
        },
        {
          "duration": 0.1,
          "phone": "b_I"
        },
        {
          "duration": 0.15,
          "phone": "ay_E"
        }
      ],
      "start": 3.95,
      "startOffset": 49,
      "word": "thereby"
    },
    {
      "alignedWord": "<unk>",
      "case": "success",
      "end": 4.85,
      "endOffset": 65,
      "phones": [
        {
          "duration": 0.43,
          "phone": "oov_S"
        }
      ],
      "start": 4.42,
      "startOffset": 57,
      "word": "beauty's"
    },
    {
      "alignedWord": "rose",
      "case": "success",
      "end": 5.34,
      "endOffset": 70,
      "phones": [
        {
          "duration": 0.14,
          "phone": "r_B"
        },
        {
          "duration": 0.23,
          "phone": "ow_I"
        },
        {
          "duration": 0.11,
          "phone": "z_E"
        }
      ],
      "start": 4.86,
      "startOffset": 66,
      "word": "rose"
    },
    {
      "alignedWord": "might",
      "case": "success",
      "end": 5.62,
      "endOffset": 76,
      "phones": [
        {
          "duration": 0.06,
          "phone": "m_B"
        },
        {
          "duration": 0.1,
          "phone": "ay_I"
        },
        {
          "duration": 0.08,
          "phone": "t_E"
        }
      ],
      "start": 5.38,
      "startOffset": 71,
      "word": "might"
    },
    {
      "alignedWord": "never",
      "case": "success",
      "end": 5.92,
      "endOffset": 82,
      "phones": [
        {
          "duration": 0.06,
          "phone": "n_B"
        },
        {
          "duration": 0.07,
          "phone": "eh_I"
        },
        {
          "duration": 0.09,
          "phone": "v_I"
        },
        {
          "duration": 0.08,
          "phone": "er_E"
        }
      ],
      "start": 5.62,
      "startOffset": 77,
      "word": "never"
    },
    {
      "alignedWord": "die",
      "case": "success",
      "end": 6.43,
      "endOffset": 86,
      "phones": [
        {
          "duration": 0.1,
          "phone": "d_B"
        },
        {
          "duration": 0.4,
          "phone": "ay_E"
        }
      ],
      "start": 5.93,
      "startOffset": 83,
      "word": "die"
    },
    {
      "alignedWord": "but",
      "case": "success",
      "end": 7.24,
      "endOffset": 92,
      "phones": [
        {
          "duration": 0.09,
          "phone": "b_B"
        },
        {
          "duration": 0.04,
          "phone": "ah_I"
        },
        {
          "duration": 0.07,
          "phone": "t_E"
        }
      ],
      "start": 7.04,
      "startOffset": 89,
      "word": "But"
    },
    {
      "alignedWord": "as",
      "case": "success",
      "end": 7.46,
      "endOffset": 95,
      "phones": [
        {
          "duration": 0.11,
          "phone": "ae_B"
        },
        {
          "duration": 0.09,
          "phone": "z_E"
        }
      ],
      "start": 7.26,
      "startOffset": 93,
      "word": "as"
    },
    {
      "alignedWord": "the",
      "case": "success",
      "end": 7.63,
      "endOffset": 99,
      "phones": [
        {
          "duration": 0.07,
          "phone": "dh_B"
        },
        {
          "duration": 0.09,
          "phone": "ah_E"
        }
      ],
      "start": 7.47,
      "startOffset": 96,
      "word": "the"
    },
    {
      "alignedWord": "<unk>",
      "case": "success",
      "end": 8.129999999999999,
      "endOffset": 105,
      "phones": [
        {
          "duration": 0.5,
          "phone": "oov_S"
        }
      ],
      "start": 7.63,
      "startOffset": 100,
      "word": "riper"
    },
    {
      "alignedWord": "should",
      "case": "success",
      "end": 8.42,
      "endOffset": 112,
      "phones": [
        {
          "duration": 0.12,
          "phone": "sh_B"
        },
        {
          "duration": 0.07,
          "phone": "uh_I"
        },
        {
          "duration": 0.08,
          "phone": "d_E"
        }
      ],
      "start": 8.15,
      "startOffset": 106,
      "word": "should"
    },
    {
      "alignedWord": "by",
      "case": "success",
      "end": 8.62,
      "endOffset": 115,
      "phones": [
        {
          "duration": 0.07,
          "phone": "b_B"
        },
        {
          "duration": 0.13,
          "phone": "ay_E"
        }
      ],
      "start": 8.42,
      "startOffset": 113,
      "word": "by"
    },
    {
      "alignedWord": "time",
      "case": "success",
      "end": 9.08,
      "endOffset": 120,
      "phones": [
        {
          "duration": 0.09,
          "phone": "t_B"
        },
        {
          "duration": 0.21,
          "phone": "ay_I"
        },
        {
          "duration": 0.13,
          "phone": "m_E"
        }
      ],
      "start": 8.65,
      "startOffset": 116,
      "word": "time"
    },
    {
      "alignedWord": "<unk>",
      "case": "success",
      "end": 9.68,
      "endOffset": 128,
      "phones": [
        {
          "duration": 0.59,
          "phone": "oov_S"
        }
      ],
      "start": 9.09,
      "startOffset": 121,
      "word": "decease"
    },
    {
      "alignedWord": "his",
      "case": "success",
      "end": 10.200000000000001,
      "endOffset": 134,
      "phones": [
        {
          "duration": 0.08,
          "phone": "hh_B"
        },
        {
          "duration": 0.05,
          "phone": "ih_I"
        },
        {
          "duration": 0.11,
          "phone": "z_E"
        }
      ],
      "start": 9.96,
      "startOffset": 131,
      "word": "His"
    },
    {
      "alignedWord": "tender",
      "case": "success",
      "end": 10.68,
      "endOffset": 141,
      "phones": [
        {
          "duration": 0.08,
          "phone": "t_B"
        },
        {
          "duration": 0.08,
          "phone": "eh_I"
        },
        {
          "duration": 0.09,
          "phone": "n_I"
        },
        {
          "duration": 0.11,
          "phone": "d_I"
        },
        {
          "duration": 0.12,
          "phone": "er_E"
        }
      ],
      "start": 10.2,
      "startOffset": 135,
      "word": "tender"
    },
    {
      "alignedWord": "heir",
      "case": "success",
      "end": 11.079999,
      "endOffset": 146,
      "phones": [
        {
          "duration": 0.2,
          "phone": "eh_B"
        },
        {
          "duration": 0.2,
          "phone": "r_E"
        }
      ],
      "start": 10.679999,
      "startOffset": 142,
      "word": "heir"
    },
    {
      "alignedWord": "might",
      "case": "success",
      "end": 11.41,
      "endOffset": 152,
      "phones": [
        {
          "duration": 0.12,
          "phone": "m_B"
        },
        {
          "duration": 0.1,
          "phone": "ay_I"
        },
        {
          "duration": 0.06,
          "phone": "t_E"
        }
      ],
      "start": 11.13,
      "startOffset": 147,
      "word": "might"
    },
    {
      "alignedWord": "bear",
      "case": "success",
      "end": 11.719999999999999,
      "endOffset": 157,
      "phones": [
        {
          "duration": 0.1,
          "phone": "b_B"
        },
        {
          "duration": 0.11,
          "phone": "eh_I"
        },
        {
          "duration": 0.07,
          "phone": "r_E"
        }
      ],
      "start": 11.44,
      "startOffset": 153,
      "word": "bear"
    },
    {
      "alignedWord": "his",
      "case": "success",
      "end": 11.96,
      "endOffset": 161,
      "phones": [
        {
          "duration": 0.07,
          "phone": "hh_B"
        },
        {
          "duration": 0.06,
          "phone": "ih_I"
        },
        {
          "duration": 0.1,
          "phone": "z_E"
        }
      ],
      "start": 11.73,
      "startOffset": 158,
      "word": "his"
    },
    {
      "alignedWord": "memory",
      "case": "success",
      "end": 12.530000000000001,
      "endOffset": 168,
      "phones": [
        {
          "duration": 0.07,
          "phone": "m_B"
        },
        {
          "duration": 0.11,
          "phone": "eh_I"
        },
        {
          "duration": 0.08,
          "phone": "m_I"
        },
        {
          "duration": 0.15,
          "phone": "er_I"
        },
        {
          "duration": 0.16,
          "phone": "iy_E"
        }
      ],
      "start": 11.96,
      "startOffset": 162,
      "word": "memory"
    },
    {
      "alignedWord": "but",
      "case": "success",
      "end": 13.349999,
      "endOffset": 174,
      "phones": [
        {
          "duration": 0.09,
          "phone": "b_B"
        },
        {
          "duration": 0.05,
          "phone": "ah_I"
        },
        {
          "duration": 0.07,
          "phone": "t_E"
        }
      ],
      "start": 13.139999,
      "startOffset": 171,
      "word": "But"
    },
    {
      "alignedWord": "thou",
      "case": "success",
      "end": 13.92,
      "endOffset": 179,
      "phones": [
        {
          "duration": 0.14,
          "phone": "dh_B"
        },
        {
          "duration": 0.42,
          "phone": "aw_E"
        }
      ],
      "start": 13.36,
      "startOffset": 175,
      "word": "thou"
    },
    {
      "alignedWord": "contracted",
      "case": "success",
      "end": 14.629999,
      "endOffset": 191,
      "phones": [
        {
          "duration": 0.06,
          "phone": "k_B"
        },
        {
          "duration": 0.06,
          "phone": "aa_I"
        },
        {
          "duration": 0.05,
          "phone": "n_I"
        },
        {
          "duration": 0.07,
          "phone": "t_I"
        },
        {
          "duration": 0.07,
          "phone": "r_I"
        },
        {
          "duration": 0.08,
          "phone": "ae_I"
        },
        {
          "duration": 0.1,
          "phone": "k_I"
        },
        {
          "duration": 0.06,
          "phone": "t_I"
        },
        {
          "duration": 0.08,
          "phone": "ah_I"
        },
        {
          "duration": 0.07,
          "phone": "d_E"
        }
      ],
      "start": 13.929999,
      "startOffset": 181,
      "word": "contracted"
    },
    {
      "alignedWord": "to",
      "case": "success",
      "end": 14.760000000000002,
      "endOffset": 194,
      "phones": [
        {
          "duration": 0.04,
          "phone": "t_B"
        },
        {
          "duration": 0.09,
          "phone": "ih_E"
        }
      ],
      "start": 14.63,
      "startOffset": 192,
      "word": "to"
    },
    {
      "alignedWord": "thine",
      "case": "success",
      "end": 15.049999,
      "endOffset": 200,
      "phones": [
        {
          "duration": 0.08,
          "phone": "dh_B"
        },
        {
          "duration": 0.13,
          "phone": "ay_I"
        },
        {
          "duration": 0.08,
          "phone": "n_E"
        }
      ],
      "start": 14.759999,
      "startOffset": 195,
      "word": "thine"
    },
    {
      "alignedWord": "own",
      "case": "success",
      "end": 15.319999,
      "endOffset": 204,
      "phones": [
        {
          "duration": 0.17,
          "phone": "ow_B"
        },
        {
          "duration": 0.1,
          "phone": "n_E"
        }
      ],
      "start": 15.049999,
      "startOffset": 201,
      "word": "own"
    },
    {
      "alignedWord": "bright",
      "case": "success",
      "end": 15.72,
      "endOffset": 211,
      "phones": [
        {
          "duration": 0.1,
          "phone": "b_B"
        },
        {
          "duration": 0.08,
          "phone": "r_I"
        },
        {
          "duration": 0.12,
          "phone": "ay_I"
        },
        {
          "duration": 0.09,
          "phone": "t_E"
        }
      ],
      "start": 15.33,
      "startOffset": 205,
      "word": "bright"
    },
    {
      "alignedWord": "eyes",
      "case": "success",
      "end": 16.199999,
      "endOffset": 216,
      "phones": [
        {
          "duration": 0.31,
          "phone": "ay_B"
        },
        {
          "duration": 0.17,
          "phone": "z_E"
        }
      ],
      "start": 15.719999,
      "startOffset": 212,
      "word": "eyes"
    },
    {
      "alignedWord": "<unk>",
      "case": "success",
      "end": 16.97,
      "endOffset": 226,
      "phones": [
        {
          "duration": 0.56,
          "phone": "oov_S"
        }
      ],
      "start": 16.41,
      "startOffset": 219,
      "word": "Feed'st"
    },
    {
      "alignedWord": "thy",
      "case": "success",
      "end": 17.119999,
      "endOffset": 230,
      "phones": [
        {
          "duration": 0.01,
          "phone": "dh_B"
        },
        {
          "duration": 0.14,
          "phone": "ay_E"
        }
      ],
      "start": 16.969999,
      "startOffset": 227,
      "word": "thy"
    },
    {
      "alignedWord": "<unk>",
      "case": "success",
      "end": 17.589999000000002,
      "endOffset": 239,
      "phones": [
        {
          "duration": 0.46,
          "phone": "oov_S"
        }
      ],
      "start": 17.129999,
      "startOffset": 231,
      "word": "light'st"
    },
    {
      "alignedWord": "flame",
      "case": "success",
      "end": 17.990000000000002,
      "endOffset": 245,
      "phones": [
        {
          "duration": 0.11,
          "phone": "f_B"
        },
        {
          "duration": 0.09,
          "phone": "l_I"
        },
        {
          "duration": 0.1,
          "phone": "ey_I"
        },
        {
          "duration": 0.09,
          "phone": "m_E"
        }
      ],
      "start": 17.6,
      "startOffset": 240,
      "word": "flame"
    },
    {
      "alignedWord": "with",
      "case": "success",
      "end": 18.169999999999998,
      "endOffset": 250,
      "phones": [
        {
          "duration": 0.05,
          "phone": "w_B"
        },
        {
          "duration": 0.05,
          "phone": "ih_I"
        },
        {
          "duration": 0.08,
          "phone": "th_E"
        }
      ],
      "start": 17.99,
      "startOffset": 246,
      "word": "with"
    },
    {
      "alignedWord": "self",
      "case": "success",
      "end": 18.529999999999998,
      "endOffset": 255,
      "phones": [
        {
          "duration": 0.15,
          "phone": "s_B"
        },
        {
          "duration": 0.08,
          "phone": "eh_I"
        },
        {
          "duration": 0.07,
          "phone": "l_I"
        },
        {
          "duration": 0.03,
          "phone": "f_E"
        }
      ],
      "start": 18.2,
      "startOffset": 251,
      "word": "self"
    },
    {
      "alignedWord": "substantial",
      "case": "success",
      "end": 19.37,
      "endOffset": 267,
      "phones": [
        {
          "duration": 0.14,
          "phone": "s_B"
        },
        {
          "duration": 0.06,
          "phone": "ah_I"
        },
        {
          "duration": 0.1,
          "phone": "b_I"
        },
        {
          "duration": 0.03,
          "phone": "s_I"
        },
        {
          "duration": 0.09,
          "phone": "t_I"
        },
        {
          "duration": 0.09,
          "phone": "ae_I"
        },
        {
          "duration": 0.08,
          "phone": "n_I"
        },
        {
          "duration": 0.08,
          "phone": "sh_I"
        },
        {
          "duration": 0.08,
          "phone": "ah_I"
        },
        {
          "duration": 0.05,
          "phone": "l_E"
        }
      ],
      "start": 18.57,
      "startOffset": 256,
      "word": "substantial"
    },
    {
      "alignedWord": "fuel",
      "case": "success",
      "end": 19.830000000000002,
      "endOffset": 272,
      "phones": [
        {
          "duration": 0.1,
          "phone": "f_B"
        },
        {
          "duration": 0.04,
          "phone": "y_I"
        },
        {
          "duration": 0.07,
          "phone": "uw_I"
        },
        {
          "duration": 0.09,
          "phone": "ah_I"
        },
        {
          "duration": 0.16,
          "phone": "l_E"
        }
      ],
      "start": 19.37,
      "startOffset": 268,
      "word": "fuel"
    },
    {
      "alignedWord": "making",
      "case": "success",
      "end": 20.67,
      "endOffset": 281,
      "phones": [
        {
          "duration": 0.11,
          "phone": "m_B"
        },
        {
          "duration": 0.09,
          "phone": "ey_I"
        },
        {
          "duration": 0.05,
          "phone": "k_I"
        },
        {
          "duration": 0.05,
          "phone": "ih_I"
        },
        {
          "duration": 0.09,
          "phone": "ng_E"
        }
      ],
      "start": 20.28,
      "startOffset": 275,
      "word": "Making"
    },
    {
      "alignedWord": "a",
      "case": "success",
      "end": 20.73,
      "endOffset": 283,
      "phones": [
        {
          "duration": 0.06,
          "phone": "ah_S"
        }
      ],
      "start": 20.67,
      "startOffset": 282,
      "word": "a"
    },
    {
      "alignedWord": "famine",
      "case": "success",
      "end": 21.330000000000002,
      "endOffset": 290,
      "phones": [
        {
          "duration": 0.21,
          "phone": "f_B"
        },
        {
          "duration": 0.12,
          "phone": "ae_I"
        },
        {
          "duration": 0.07,
          "phone": "m_I"
        },
        {
          "duration": 0.06,
          "phone": "ah_I"
        },
        {
          "duration": 0.14,
          "phone": "n_E"
        }
      ],
      "start": 20.73,
      "startOffset": 284,
      "word": "famine"
    },
    {
      "alignedWord": "where",
      "case": "success",
      "end": 21.59,
      "endOffset": 296,
      "phones": [
        {
          "duration": 0.11,
          "phone": "w_B"
        },
        {
          "duration": 0.06,
          "phone": "eh_I"
        },
        {
          "duration": 0.08,
          "phone": "r_E"
        }
      ],
      "start": 21.34,
      "startOffset": 291,
      "word": "where"
    },
    {
      "alignedWord": "abundance",
      "case": "success",
      "end": 22.23,
      "endOffset": 306,
      "phones": [
        {
          "duration": 0.06,
          "phone": "ah_B"
        },
        {
          "duration": 0.1,
          "phone": "b_I"
        },
        {
          "duration": 0.06,
          "phone": "ah_I"
        },
        {
          "duration": 0.12,
          "phone": "n_I"
        },
        {
          "duration": 0.09,
          "phone": "d_I"
        },
        {
          "duration": 0.06,
          "phone": "ah_I"
        },
        {
          "duration": 0.08,
          "phone": "n_I"
        },
        {
          "duration": 0.07,
          "phone": "s_E"
        }
      ],
      "start": 21.59,
      "startOffset": 297,
      "word": "abundance"
    },
    {
      "alignedWord": "lies",
      "case": "success",
      "end": 22.779999999999998,
      "endOffset": 311,
      "phones": [
        {
          "duration": 0.11,
          "phone": "l_B"
        },
        {
          "duration": 0.23,
          "phone": "ay_I"
        },
        {
          "duration": 0.18,
          "phone": "z_E"
        }
      ],
      "start": 22.259999999999998,
      "startOffset": 307,
      "word": "lies"
    },
    {
      "alignedWord": "<unk>",
      "case": "success",
      "end": 23.419999999999998,
      "endOffset": 321,
      "phones": [
        {
          "duration": 0.09,
          "phone": "oov_S"
        }
      ],
      "start": 23.33,
      "startOffset": 314,
      "word": "Thyself"
    },
    {
      "alignedWord": "thy",
      "case": "success",
      "end": 23.560000000000002,
      "endOffset": 325,
      "phones": [
        {
          "duration": 0.01,
          "phone": "dh_B"
        },
        {
          "duration": 0.13,
          "phone": "ay_E"
        }
      ],
      "start": 23.42,
      "startOffset": 322,
      "word": "thy"
    },
    {
      "alignedWord": "foe",
      "case": "success",
      "end": 24.630000000000003,
      "endOffset": 329,
      "phones": [
        {
          "duration": 0.16,
          "phone": "f_B"
        },
        {
          "duration": 0.23,
          "phone": "ow_E"
        }
      ],
      "start": 24.240000000000002,
      "startOffset": 326,
      "word": "foe"
    },
    {
      "alignedWord": "to",
      "case": "success",
      "end": 24.77,
      "endOffset": 333,
      "phones": [
        {
          "duration": 0.07,
          "phone": "t_B"
        },
        {
          "duration": 0.07,
          "phone": "ih_E"
        }
      ],
      "start": 24.63,
      "startOffset": 331,
      "word": "to"
    },
    {
      "alignedWord": "thy",
      "case": "success",
      "end": 25.02,
      "endOffset": 337,
      "phones": [
        {
          "duration": 0.08,
          "phone": "dh_B"
        },
        {
          "duration": 0.17,
          "phone": "ay_E"
        }
      ],
      "start": 24.77,
      "startOffset": 334,
      "word": "thy"
    },
    {
      "alignedWord": "sweet",
      "case": "success",
      "end": 25.33,
      "endOffset": 343,
      "phones": [
        {
          "duration": 0.12,
          "phone": "s_B"
        },
        {
          "duration": 0.06,
          "phone": "w_I"
        },
        {
          "duration": 0.06,
          "phone": "iy_I"
        },
        {
          "duration": 0.07,
          "phone": "t_E"
        }
      ],
      "start": 25.02,
      "startOffset": 338,
      "word": "sweet"
    },
    {
      "alignedWord": "self",
      "case": "success",
      "end": 25.68,
      "endOffset": 348,
      "phones": [
        {
          "duration": 0.12,
          "phone": "s_B"
        },
        {
          "duration": 0.08,
          "phone": "eh_I"
        },
        {
          "duration": 0.06,
          "phone": "l_I"
        },
        {
          "duration": 0.09,
          "phone": "f_E"
        }
      ],
      "start": 25.33,
      "startOffset": 344,
      "word": "self"
    },
    {
      "alignedWord": "too",
      "case": "success",
      "end": 25.9,
      "endOffset": 352,
      "phones": [
        {
          "duration": 0.09,
          "phone": "t_B"
        },
        {
          "duration": 0.13,
          "phone": "uw_E"
        }
      ],
      "start": 25.68,
      "startOffset": 349,
      "word": "too"
    },
    {
      "alignedWord": "cruel",
      "case": "success",
      "end": 26.46,
      "endOffset": 358,
      "phones": [
        {
          "duration": 0.1,
          "phone": "k_B"
        },
        {
          "duration": 0.05,
          "phone": "r_I"
        },
        {
          "duration": 0.16,
          "phone": "uw_I"
        },
        {
          "duration": 0.22,
          "phone": "l_E"
        }
      ],
      "start": 25.93,
      "startOffset": 353,
      "word": "cruel"
    },
    {
      "alignedWord": "thou",
      "case": "success",
      "end": 27.53,
      "endOffset": 365,
      "phones": [
        {
          "duration": 0.12,
          "phone": "dh_B"
        },
        {
          "duration": 0.28,
          "phone": "aw_E"
        }
      ],
      "start": 27.130000000000003,
      "startOffset": 361,
      "word": "Thou"
    },
    {
      "alignedWord": "that",
      "case": "success",
      "end": 27.720000000000002,
      "endOffset": 370,
      "phones": [
        {
          "duration": 0.09,
          "phone": "dh_B"
        },
        {
          "duration": 0.06,
          "phone": "ah_I"
        },
        {
          "duration": 0.04,
          "phone": "t_E"
        }
      ],
      "start": 27.53,
      "startOffset": 366,
      "word": "that"
    },
    {
      "alignedWord": "art",
      "case": "success",
      "end": 27.859999000000002,
      "endOffset": 374,
      "phones": [
        {
          "duration": 0.07,
          "phone": "aa_B"
        },
        {
          "duration": 0.03,
          "phone": "r_I"
        },
        {
          "duration": 0.04,
          "phone": "t_E"
        }
      ],
      "start": 27.719999,
      "startOffset": 371,
      "word": "art"
    },
    {
      "alignedWord": "now",
      "case": "success",
      "end": 28.109999,
      "endOffset": 378,
      "phones": [
        {
          "duration": 0.1,
          "phone": "n_B"
        },
        {
          "duration": 0.12,
          "phone": "aw_E"
        }
      ],
      "start": 27.889999,
      "startOffset": 375,
      "word": "now"
    },
    {
      "alignedWord": "the",
      "case": "success",
      "end": 28.24,
      "endOffset": 382,
      "phones": [
        {
          "duration": 0.07,
          "phone": "dh_B"
        },
        {
          "duration": 0.06,
          "phone": "ah_E"
        }
      ],
      "start": 28.11,
      "startOffset": 379,
      "word": "the"
    },
    {
      "alignedWord": "world's",
      "case": "success",
      "end": 28.73,
      "endOffset": 390,
      "phones": [
        {
          "duration": 0.15,
          "phone": "w_B"
        },
        {
          "duration": 0.12,
          "phone": "er_I"
        },
        {
          "duration": 0.06,
          "phone": "l_I"
        },
        {
          "duration": 0.08,
          "phone": "d_I"
        },
        {
          "duration": 0.08,
          "phone": "z_E"
        }
      ],
      "start": 28.240000000000002,
      "startOffset": 383,
      "word": "world's"
    },
    {
      "alignedWord": "fresh",
      "case": "success",
      "end": 29.220000000000002,
      "endOffset": 396,
      "phones": [
        {
          "duration": 0.2,
          "phone": "f_B"
        },
        {
          "duration": 0.07,
          "phone": "r_I"
        },
        {
          "duration": 0.07,
          "phone": "eh_I"
        },
        {
          "duration": 0.14,
          "phone": "sh_E"
        }
      ],
      "start": 28.740000000000002,
      "startOffset": 391,
      "word": "fresh"
    },
    {
      "alignedWord": "ornament",
      "case": "success",
      "end": 29.799999,
      "endOffset": 405,
      "phones": [
        {
          "duration": 0.14,
          "phone": "ao_B"
        },
        {
          "duration": 0.06,
          "phone": "r_I"
        },
        {
          "duration": 0.04,
          "phone": "n_I"
        },
        {
          "duration": 0.06,
          "phone": "ah_I"
        },
        {
          "duration": 0.06,
          "phone": "m_I"
        },
        {
          "duration": 0.06,
          "phone": "ah_I"
        },
        {
          "duration": 0.07,
          "phone": "n_I"
        },
        {
          "duration": 0.09,
          "phone": "t_E"
        }
      ],
      "start": 29.219999,
      "startOffset": 397,
      "word": "ornament"
    },
    {
      "alignedWord": "and",
      "case": "success",
      "end": 30.0,
      "endOffset": 410,
      "phones": [
        {
          "duration": 0.07,
          "phone": "ah_B"
        },
        {
          "duration": 0.05,
          "phone": "n_I"
        },
        {
          "duration": 0.08,
          "phone": "d_E"
        }
      ],
      "start": 29.8,
      "startOffset": 407,
      "word": "And"
    },
    {
      "alignedWord": "only",
      "case": "success",
      "end": 30.529999,
      "endOffset": 415,
      "phones": [
        {
          "duration": 0.19,
          "phone": "ow_B"
        },
        {
          "duration": 0.14,
          "phone": "n_I"
        },
        {
          "duration": 0.08,
          "phone": "l_I"
        },
        {
          "duration": 0.11,
          "phone": "iy_E"
        }
      ],
      "start": 30.009999,
      "startOffset": 411,
      "word": "only"
    },
    {
      "alignedWord": "herald",
      "case": "success",
      "end": 30.92,
      "endOffset": 422,
      "phones": [
        {
          "duration": 0.06,
          "phone": "hh_B"
        },
        {
          "duration": 0.03,
          "phone": "eh_I"
        },
        {
          "duration": 0.1,
          "phone": "r_I"
        },
        {
          "duration": 0.08,
          "phone": "ah_I"
        },
        {
          "duration": 0.07,
          "phone": "l_I"
        },
        {
          "duration": 0.05,
          "phone": "d_E"
        }
      ],
      "start": 30.53,
      "startOffset": 416,
      "word": "herald"
    },
    {
      "alignedWord": "to",
      "case": "success",
      "end": 31.039999,
      "endOffset": 425,
      "phones": [
        {
          "duration": 0.04,
          "phone": "t_B"
        },
        {
          "duration": 0.07,
          "phone": "uw_E"
        }
      ],
      "start": 30.929999000000002,
      "startOffset": 423,
      "word": "to"
    },
    {
      "alignedWord": "the",
      "case": "success",
      "end": 31.18,
      "endOffset": 429,
      "phones": [
        {
          "duration": 0.07,
          "phone": "dh_B"
        },
        {
          "duration": 0.07,
          "phone": "ah_E"
        }
      ],
      "start": 31.04,
      "startOffset": 426,
      "word": "the"
    },
    {
      "alignedWord": "gaudy",
      "case": "success",
      "end": 31.609999000000002,
      "endOffset": 435,
      "phones": [
        {
          "duration": 0.09,
          "phone": "g_B"
        },
        {
          "duration": 0.16,
          "phone": "ao_I"
        },
        {
          "duration": 0.09,
          "phone": "d_I"
        },
        {
          "duration": 0.09,
          "phone": "iy_E"
        }
      ],
      "start": 31.179999000000002,
      "startOffset": 430,
      "word": "gaudy"
    },
    {
      "alignedWord": "spring",
      "case": "success",
      "end": 32.11,
      "endOffset": 442,
      "phones": [
        {
          "duration": 0.11,
          "phone": "s_B"
        },
        {
          "duration": 0.1,
          "phone": "p_I"
        },
        {
          "duration": 0.03,
          "phone": "r_I"
        },
        {
          "duration": 0.09,
          "phone": "ih_I"
        },
        {
          "duration": 0.17,
          "phone": "ng_E"
        }
      ],
      "start": 31.61,
      "startOffset": 436,
      "word": "spring"
    },
    {
      "alignedWord": "within",
      "case": "success",
      "end": 32.889999,
      "endOffset": 451,
      "phones": [
        {
          "duration": 0.11,
          "phone": "w_B"
        },
        {
          "duration": 0.05,
          "phone": "ih_I"
        },
        {
          "duration": 0.07,
          "phone": "th_I"
        },
        {
          "duration": 0.08,
          "phone": "ih_I"
        },
        {
          "duration": 0.15,
          "phone": "n_E"
        }
      ],
      "start": 32.429999,
      "startOffset": 445,
      "word": "Within"
    },
    {
      "alignedWord": "thine",
      "case": "success",
      "end": 33.159999,
      "endOffset": 457,
      "phones": [
        {
          "duration": 0.04,
          "phone": "dh_B"
        },
        {
          "duration": 0.11,
          "phone": "ay_I"
        },
        {
          "duration": 0.08,
          "phone": "n_E"
        }
      ],
      "start": 32.929999,
      "startOffset": 452,
      "word": "thine"
    },
    {
      "alignedWord": "own",
      "case": "success",
      "end": 33.449999999999996,
      "endOffset": 461,
      "phones": [
        {
          "duration": 0.17,
          "phone": "ow_B"
        },
        {
          "duration": 0.12,
          "phone": "n_E"
        }
      ],
      "start": 33.16,
      "startOffset": 458,
      "word": "own"
    },
    {
      "alignedWord": "bud",
      "case": "success",
      "end": 33.899999,
      "endOffset": 465,
      "phones": [
        {
          "duration": 0.09,
          "phone": "b_B"
        },
        {
          "duration": 0.15,
          "phone": "ah_I"
        },
        {
          "duration": 0.19,
          "phone": "d_E"
        }
      ],
      "start": 33.469999,
      "startOffset": 462,
      "word": "bud"
    },
    {
      "alignedWord": "<unk>",
      "case": "success",
      "end": 34.480000000000004,
      "endOffset": 473,
      "phones": [
        {
          "duration": 0.52,
          "phone": "oov_S"
        }
      ],
      "start": 33.96,
      "startOffset": 466,
      "word": "buriest"
    },
    {
      "alignedWord": "thy",
      "case": "success",
      "end": 34.739999999999995,
      "endOffset": 477,
      "phones": [
        {
          "duration": 0.07,
          "phone": "dh_B"
        },
        {
          "duration": 0.15,
          "phone": "ay_E"
        }
      ],
      "start": 34.519999999999996,
      "startOffset": 474,
      "word": "thy"
    },
    {
      "alignedWord": "content",
      "case": "success",
      "end": 35.339999999999996,
      "endOffset": 485,
      "phones": [
        {
          "duration": 0.06,
          "phone": "k_B"
        },
        {
          "duration": 0.08,
          "phone": "ah_I"
        },
        {
          "duration": 0.05,
          "phone": "n_I"
        },
        {
          "duration": 0.09,
          "phone": "t_I"
        },
        {
          "duration": 0.09,
          "phone": "eh_I"
        },
        {
          "duration": 0.07,
          "phone": "n_I"
        },
        {
          "duration": 0.16,
          "phone": "t_E"
        }
      ],
      "start": 34.739999999999995,
      "startOffset": 478,
      "word": "content"
    },
    {
      "alignedWord": "and",
      "case": "success",
      "end": 35.969999,
      "endOffset": 490,
      "phones": [
        {
          "duration": 0.1,
          "phone": "ae_B"
        },
        {
          "duration": 0.08,
          "phone": "n_I"
        },
        {
          "duration": 0.09,
          "phone": "d_E"
        }
      ],
      "start": 35.699999,
      "startOffset": 487,
      "word": "And"
    },
    {
      "alignedWord": "tender",
      "case": "success",
      "end": 36.279999000000004,
      "endOffset": 498,
      "phones": [
        {
          "duration": 0.06,
          "phone": "t_B"
        },
        {
          "duration": 0.07,
          "phone": "eh_I"
        },
        {
          "duration": 0.1,
          "phone": "n_I"
        },
        {
          "duration": 0.07,
          "phone": "d_I"
        },
        {
          "duration": 0.01,
          "phone": "er_E"
        }
      ],
      "start": 35.969999,
      "startOffset": 492,
      "word": "tender"
    },
    {
      "alignedWord": "<unk>",
      "case": "success",
      "end": 36.539999,
      "endOffset": 504,
      "phones": [
        {
          "duration": 0.26,
          "phone": "oov_S"
        }
      ],
      "start": 36.279999000000004,
      "startOffset": 499,
      "word": "churl"
    },
    {
      "alignedWord": "<unk>",
      "case": "success",
      "end": 36.54,
      "endOffset": 512,
      "phones": [
        {
          "duration": 0.13,
          "phone": "oov_S"
        }
      ],
      "start": 36.41,
      "startOffset": 506,
      "word": "makest"
    },
    {
      "alignedWord": "waste",
      "case": "success",
      "end": 37.97,
      "endOffset": 518,
      "phones": [
        {
          "duration": 0.19,
          "phone": "w_B"
        },
        {
          "duration": 0.11,
          "phone": "ey_I"
        },
        {
          "duration": 0.17,
          "phone": "s_I"
        },
        {
          "duration": 0.08,
          "phone": "t_E"
        }
      ],
      "start": 37.42,
      "startOffset": 513,
      "word": "waste"
    },
    {
      "alignedWord": "in",
      "case": "success",
      "end": 38.21,
      "endOffset": 521,
      "phones": [
        {
          "duration": 0.07,
          "phone": "ih_B"
        },
        {
          "duration": 0.17,
          "phone": "n_E"
        }
      ],
      "start": 37.97,
      "startOffset": 519,
      "word": "in"
    },
    {
      "alignedWord": "<unk>",
      "case": "success",
      "end": 38.84,
      "endOffset": 532,
      "phones": [
        {
          "duration": 0.63,
          "phone": "oov_S"
        }
      ],
      "start": 38.21,
      "startOffset": 522,
      "word": "niggarding"
    },
    {
      "alignedWord": "pity",
      "case": "success",
      "end": 40.08,
      "endOffset": 539,
      "phones": [
        {
          "duration": 0.1,
          "phone": "p_B"
        },
        {
          "duration": 0.04,
          "phone": "ih_I"
        },
        {
          "duration": 0.08,
          "phone": "t_I"
        },
        {
          "duration": 0.08,
          "phone": "iy_E"
        }
      ],
      "start": 39.78,
      "startOffset": 535,
      "word": "Pity"
    },
    {
      "alignedWord": "the",
      "case": "success",
      "end": 40.22,
      "endOffset": 543,
      "phones": [
        {
          "duration": 0.05,
          "phone": "dh_B"
        },
        {
          "duration": 0.05,
          "phone": "ah_E"
        }
      ],
      "start": 40.12,
      "startOffset": 540,
      "word": "the"
    },
    {
      "alignedWord": "world",
      "case": "success",
      "end": 40.75,
      "endOffset": 549,
      "phones": [
        {
          "duration": 0.14,
          "phone": "w_B"
        },
        {
          "duration": 0.17,
          "phone": "er_I"
        },
        {
          "duration": 0.11,
          "phone": "l_I"
        },
        {
          "duration": 0.11,
          "phone": "d_E"
        }
      ],
      "start": 40.22,
      "startOffset": 544,
      "word": "world"
    },
    {
      "alignedWord": "or",
      "case": "success",
      "end": 41.550000000000004,
      "endOffset": 553,
      "phones": [
        {
          "duration": 0.13,
          "phone": "ao_B"
        },
        {
          "duration": 0.07,
          "phone": "r_E"
        }
      ],
      "start": 41.35,
      "startOffset": 551,
      "word": "or"
    },
    {
      "alignedWord": "else",
      "case": "success",
      "end": 41.79,
      "endOffset": 558,
      "phones": [
        {
          "duration": 0.07,
          "phone": "eh_B"
        },
        {
          "duration": 0.05,
          "phone": "l_I"
        },
        {
          "duration": 0.12,
          "phone": "s_E"
        }
      ],
      "start": 41.55,
      "startOffset": 554,
      "word": "else"
    },
    {
      "alignedWord": "this",
      "case": "success",
      "end": 42.07,
      "endOffset": 563,
      "phones": [
        {
          "duration": 0.06,
          "phone": "dh_B"
        },
        {
          "duration": 0.08,
          "phone": "ih_I"
        },
        {
          "duration": 0.11,
          "phone": "s_E"
        }
      ],
      "start": 41.82,
      "startOffset": 559,
      "word": "this"
    },
    {
      "alignedWord": "<unk>",
      "case": "success",
      "end": 42.65,
      "endOffset": 571,
      "phones": [
        {
          "duration": 0.53,
          "phone": "oov_S"
        }
      ],
      "start": 42.12,
      "startOffset": 564,
      "word": "glutton"
    },
    {
      "alignedWord": "be",
      "case": "success",
      "end": 43.010000000000005,
      "endOffset": 574,
      "phones": [
        {
          "duration": 0.09,
          "phone": "b_B"
        },
        {
          "duration": 0.25,
          "phone": "iy_E"
        }
      ],
      "start": 42.67,
      "startOffset": 572,
      "word": "be"
    },
    {
      "alignedWord": "to",
      "case": "success",
      "end": 43.6,
      "endOffset": 579,
      "phones": [
        {
          "duration": 0.07,
          "phone": "t_B"
        },
        {
          "duration": 0.11,
          "phone": "uw_E"
        }
      ],
      "start": 43.42,
      "startOffset": 577,
      "word": "To"
    },
    {
      "alignedWord": "eat",
      "case": "success",
      "end": 43.93,
      "endOffset": 583,
      "phones": [
        {
          "duration": 0.19,
          "phone": "iy_B"
        },
        {
          "duration": 0.1,
          "phone": "t_E"
        }
      ],
      "start": 43.64,
      "startOffset": 580,
      "word": "eat"
    },
    {
      "alignedWord": "the",
      "case": "success",
      "end": 44.12,
      "endOffset": 587,
      "phones": [
        {
          "duration": 0.04,
          "phone": "dh_B"
        },
        {
          "duration": 0.06,
          "phone": "ah_E"
        }
      ],
      "start": 44.019999999999996,
      "startOffset": 584,
      "word": "the"
    },
    {
      "alignedWord": "world's",
      "case": "success",
      "end": 44.64,
      "endOffset": 595,
      "phones": [
        {
          "duration": 0.12,
          "phone": "w_B"
        },
        {
          "duration": 0.14,
          "phone": "er_I"
        },
        {
          "duration": 0.08,
          "phone": "l_I"
        },
        {
          "duration": 0.08,
          "phone": "d_I"
        },
        {
          "duration": 0.1,
          "phone": "z_E"
        }
      ],
      "start": 44.12,
      "startOffset": 588,
      "word": "world's"
    },
    {
      "alignedWord": "due",
      "case": "success",
      "end": 45.149999,
      "endOffset": 599,
      "phones": [
        {
          "duration": 0.08,
          "phone": "d_B"
        },
        {
          "duration": 0.43,
          "phone": "uw_E"
        }
      ],
      "start": 44.639999,
      "startOffset": 596,
      "word": "due"
    },
    {
      "alignedWord": "by",
      "case": "success",
      "end": 45.44,
      "endOffset": 603,
      "phones": [
        {
          "duration": 0.11,
          "phone": "b_B"
        },
        {
          "duration": 0.11,
          "phone": "ay_E"
        }
      ],
      "start": 45.22,
      "startOffset": 601,
      "word": "by"
    },
    {
      "alignedWord": "the",
      "case": "success",
      "end": 45.57,
      "endOffset": 607,
      "phones": [
        {
          "duration": 0.07,
          "phone": "dh_B"
        },
        {
          "duration": 0.05,
          "phone": "ah_E"
        }
      ],
      "start": 45.45,
      "startOffset": 604,
      "word": "the"
    },
    {
      "alignedWord": "grave",
      "case": "success",
      "end": 46.07,
      "endOffset": 613,
      "phones": [
        {
          "duration": 0.09,
          "phone": "g_B"
        },
        {
          "duration": 0.11,
          "phone": "r_I"
        },
        {
          "duration": 0.19,
          "phone": "ey_I"
        },
        {
          "duration": 0.11,
          "phone": "v_E"
        }
      ],
      "start": 45.57,
      "startOffset": 608,
      "word": "grave"
    },
    {
      "alignedWord": "and",
      "case": "success",
      "end": 46.269999,
      "endOffset": 617,
      "phones": [
        {
          "duration": 0.04,
          "phone": "ah_B"
        },
        {
          "duration": 0.08,
          "phone": "n_I"
        },
        {
          "duration": 0.05,
          "phone": "d_E"
        }
      ],
      "start": 46.099999,
      "startOffset": 614,
      "word": "and"
    },
    {
      "alignedWord": "thee",
      "case": "success",
      "end": 46.75,
      "endOffset": 622,
      "phones": [
        {
          "duration": 0.12,
          "phone": "dh_B"
        },
        {
          "duration": 0.35,
          "phone": "iy_E"
        }
      ],
      "start": 46.28,
      "startOffset": 618,
      "word": "thee"
    }
  ]
}

$(document).ready(function(){
	render(INLINE_JSON);
});
