// console.log("Hello World");
// alert("Hello World");

var drink = "Energy Drink"; 
var lyrics = "";
var cans = 99;

while (cans > 0) {
lyrics = lyrics + cans + " cans of "
+ drink + " on the wall <br>"; 
lyrics = lyrics + cans + " cans of "
+ drink + "<br>";
lyrics = lyrics + "Take one down, pass it around,<br>";
if (cans > 1) {
lyrics = lyrics + (cans-1) + " cans of "
+ drink + " on the wall <br>"; }
else {
lyrics = lyrics + "No more cans of "
} + drink + " on the wall <br>";
cans = cans - 1; }
var paragraph = document.getElementById("one");
paragraph.innerHTML = lyrics
// console.log(lyrics);
// alert(lyrics);
// document.write(lyrics);
var names = ["Callie","Ryan","Justin D", "Justin Z"];
console.log(names);