var text = "something";
console.log(text.indexOf('eth'));

var text2 = "Apple, banana, kivi";
console.log(text2.slice(7, 13));
console.log(text2.substr(7, 6));
console.log(text2.substring(7, 13));
console.log(text2.slice(-12, -6));
text.replace('something', 'any');
console.log(text.replace('some', 'any'));
console.log(text.replace(/sOMe/i, 'any'));//case insensitive

text = "something and something";
console.log(text.replace('some', 'any'));
console.log(text.replace(/some/g, 'any'));
console.log(text.replace(/sOme/gi, 'any'));

console.log(text.toUpperCase());

text = "                   something and    something     ;       ";
console.log(text);
console.log(text.trim());
text = "aabbss";
console.log(text.charAt(0));
console.log(text.charCodeAt(0));
console.log(text[0]);

