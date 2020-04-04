var i = 0;
function timedCount(){
    i+=2;
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();