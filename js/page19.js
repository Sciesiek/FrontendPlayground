var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(300, 200);
ctx.stroke();


var canvas2 = document.getElementById("myCanvas2");
var context2 = canvas2.getContext("2d");
context2.beginPath();
context2.arc(100, 100, 80, 0, 2* Math.PI);
context2.stroke();

var canvas3 = document.getElementById("myCanvas3");
var context3 = canvas3.getContext("2d");
context3.font = '30px Arial';
context3.strokeText("Hello World", 10, 50);

var canvas4 = document.getElementById("myCanvas4");
var context4 = canvas4.getContext("2d");

var gradient = context4.createLinearGradient(0, 0, 200  , 0);
gradient.addColorStop(0, "green");
gradient.addColorStop(1, "blue");

context4.fillStyle = gradient;
context4.fillRect(10, 10, 180, 80);

var canvas5 = document.getElementById("myCanvas5");
var context5 = canvas5.getContext("2d");

var gradient = context5.createRadialGradient(50, 50, 25, 90, 50, 100);
gradient.addColorStop(0, "green");
gradient.addColorStop(1, "blue");

context5.fillStyle = gradient;
context5.fillRect(10, 10, 180, 80);


