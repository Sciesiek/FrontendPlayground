var sandboxContent = document.getElementById('content');

sandboxContent.innerHTML = 'Hello World' + (4**3);


var i = 0;

function count(){
    i++;
    sandboxContent.innerHTML += ', ' +i;
}

function docWrite(){
    document.write(5 + 61);
}

function windowAlert(){
    window.alert('alert biach')
}

function windowPrint(){
    window.print();
}
