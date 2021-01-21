var textarea = document.getElementById("text");
        var searchStroke = "";
        var stroke = new Array();
        var strokeBtn = document.getElementsByClassName("strokeBtn");
        var strokeInput = document.getElementsByClassName("strokeInput")[0];
        var strokeSelect = document.getElementsByClassName("strokeSelect")[0];
        for(let i=0; i<=4; i++){
            strokeBtn[i].onclick = function(){
                searchStroke += i+1;
                displayStroke(i+1);
            }
        }

        strokeBtn[6].onclick = function(){
            searchStrokes(searchStroke);
        }
        strokeBtn[5].onclick = function(){
            clearStrokes();
        }

        function displayStroke(val){
            if(val == 1)
                strokeInput.innerHTML += "一";
            else if(val == 2)
                strokeInput.innerHTML += "丨";
            else if(val == 3)
                strokeInput.innerHTML += "丿";
            else if(val == 4)
                strokeInput.innerHTML += "丶";  
            else if(val == 5)
                strokeInput.innerHTML += "乛";
        }

        function searchStrokes(val){
            var i = 0;
            var pendingHTML = "";
            stroke.length  = 0;
            strokeSelect.innerHTML = "";
            for(let key in strokes){ 
	            if(strokes[key] == val){
                    stroke[i] = key;
                    pendingHTML += '<div class="stks" onclick="stksfun(\'' + key + '\')">' + key + '</div>';
                    i++;
                }
                strokeSelect.innerHTML = pendingHTML;
            }
        }

        function clearStrokes(){
            strokeSelect.innerHTML = "";
            strokeInput.innerHTML = "";
            searchStroke = "";
        }

        function stksfun(val){
            clearStrokes();
            textarea.value += val; 
        }