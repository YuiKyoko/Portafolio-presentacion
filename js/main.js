window.addEventListener("load",function () {
    var html = document.getElementById('html').getContext('2d');
    var js= document.getElementById("js").getContext("2d");
    var css= document.getElementById("css").getContext("2d");
    var jquery= document.getElementById("jquery").getContext("2d");
    var al = 0;
    var start = 3.72; 
    var cw = html.canvas.width;
    var ch = html.canvas.height;
    var diff;
    function progressHtml(){
        diff = ((al / 100) * Math.PI*2*10).toFixed(2);
        html.clearRect(0, 0, cw, ch);
        html.lineWidth = 15;
        html.fillStyle = '#D499B9';
        html.strokeStyle = "#D499B9";
        html.textAlign = 'center';
        html.fillText(al+'%', cw*.5, ch*.5+2, cw);
        html.beginPath();
        html.arc(100, 120, 80, start, diff/10+start, false);
        html.stroke();
        if(al >= 70){
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    function progressJs(){
        diff = ((al / 100) * Math.PI*2*10).toFixed(2);
        js.clearRect(0, 0, cw, ch);
        js.lineWidth = 10;
        js.fillStyle = '#D499B9';
        js.strokeStyle = "#D499B9";
        js.textAlign = 'center';
        js.fillText(al+'%', cw*.5, ch*.5+1, cw);
        js.beginPath();
        js.arc(100, 120, 80, start, diff/10+start, false);
        js.stroke();
        if(al >= 50){
            clearTimeout(pjs);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    function progressCss(){
        diff = ((al / 100) * Math.PI*2*10).toFixed(2);
        css.clearRect(0, 0, cw, ch);
        css.lineWidth = 10;
        css.fillStyle = '#D499B9';
        css.strokeStyle = "#D499B9";
        css.textAlign = 'center';
        css.fillText(al+'%', cw*.5, ch*.5+2, cw);
        css.beginPath();
        css.arc(100, 120, 80, start, diff/10+start, false);
        css.stroke();
        if(al >= 80){
            clearTimeout(pcss);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    function progressJquery(){
        diff = ((al / 100) * Math.PI*2*10).toFixed(2);
        jquery.clearRect(0, 0, cw, ch);
        jquery.lineWidth = 10;
        jquery.fillStyle = '#D499B9';
        jquery.strokeStyle = "#D499B9";
        jquery.textAlign = 'center';
        jquery.fillText(al+'%', cw*.5, ch*.5+2, cw);
        jquery.beginPath();
        jquery.arc(100, 120, 80, start, diff/10+start, false);
        jquery.stroke();
        if(al >= 25){
            clearTimeout(pjquery);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressHtml, 50);
    var pjs= setInterval(progressJs, 50);
    var pcss=setInterval(progressCss,50);
    var pjquery=setInterval(progressJquery,50);
})