var resultContainer = document.getElementById('text');

function currentDate(){
    resultContainer.innerHTML = Date();
}

function stringLength(){
    var test = '\'it\'s\''; 
    resultContainer.innerHTML = test + " - length: " + test.length
}

function findInText(){
    var text = 'Please locate where \'locate\' occurs!';
    var pos = text.indexOf('locate');
    var posLast = text.lastIndexOf('locate');
    resultContainer.innerHTML = "first occurence of locate in: " + text + " is " + pos
    + "last occurence is: " + posLast;
}