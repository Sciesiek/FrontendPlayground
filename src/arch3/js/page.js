var sandboxContent = document.getElementById('content');

sandboxContent.innerHTML = 'Hello World' + (4**3);


var i = 0;

function increment(){
    i++;
    sandboxContent.innerHTML += ', ' +i;
}

function prefixDecrement(){
    --i;
    sandboxContent.innerHTML += ', ' +i;
}

function shiftLeft(){
    i = i << 1;
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

function printObject(){
    var person = 
    {
        lastName: "Novak",
        firstName: "Jan",
        gender: "Male",
        age: 80,
        print: function(){
            return "person: " 
            + this.lastName + " " + this.firstName 
            + ", gender: " + this. gender 
            + ", age: " + this.age;
        }
    };
    // sandboxContent.innerHTML = "person: " 
    // + person.lastName + " " + person.firstName 
    // + ", gender: " + person['gender'] 
    // + ", age: " + person.age;
    sandboxContent.innerHTML = person.print();

}

function print(){
    sandboxContent.innerHTML = typeof null;
}
