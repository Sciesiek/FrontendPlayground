var arrah = ['Lizard','Cat', 'Dog', 'Cow'];
console.log(arrah);
console.log(arrah.sort());

var arrah2 = [3, 1, 100, 43, 13];
console.log(arrah2);
console.log(arrah2.sort());

for(let i = 0; i < arrah.length; i++){
    console.log(arrah[i]);
}

arrah2.forEach(myFunction);

function myFunction(value){
    console.log(value);
}

arrah.push('Parrot');

arrah.forEach(myFunction);

// console.log(arrah2.toString());
// console.log(arrah2.join(", "));
// console.log(arrah2.join("\n"));
// console.log("\n\n\n\n" + arrah2.pop());
// console.log(arrah2);
// console.log(arrah2.push(9001));
// console.log(arrah2);
// console.log(arrah2.shift());
// console.log(arrah2);
// console.log(arrah2.unshift(500));
// console.log(arrah2);
arrah2.splice(3, 1, 100, 200, 300)
console.log(arrah2);

var concatArrah = arrah2.concat(arrah, arrah2);
console.log(concatArrah);