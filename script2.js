function makePhrases() {
  // literal array
  // var words1 = ["24/7", "multi-Tier", "30,000 foot", "B-to-B", "win-win"];
  // var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  // var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
  // constructor array
  const words1 = new Array(
    "24/7",
    "multi-Tier",
    "30,000 foot",
    "B-to-B",
    "win-win"
  );
  const words2 = new Array(
    "empowered",
    "value-added",
    "oriented",
    "focused",
    "aligned"
  );
  const words3 = new Array(
    "process",
    "solution",
    "tipping-point",
    "strategy",
    "vision"
  );

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);
  var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
  var phraseElement = document.getElementById("phrase");
  phraseElement.innerHTML = phrase;
  // console.log(words1);
}
//  window.onload = makePhrases;
// var myButton = document.getElementById("myBtn");

function test() {
  var x = 2021;
  var y = 1982;
  var z = x - y;
  var msg = "Jack is " + z + " years old";
  var para = document.getElementById("age");
  console.log(para);
  para.innerHTML = msg;
}

test();

var getArea = (function (x, y, z) {
  var x = 3;
  var y = 7;
  var z = 5;
  var area = x * y;
  var volume = x * y * z;
  var size = [area, volume];
  console.log(size[1]);
  return size;
})();
// var width = 5;
// var height = 15;

// var x = getArea(width, height);
// var y = getArea(22, 4);
//var x = getArea(3,7,5);
//console.log ("x is " + x[1]);

// object with literal syntax
// let webClasses = {
//     vct1121: "Introduction to HTML and CSS",
//     vct1123: "Interactive Web Design 1",
//     vct2121: "Responsive web Design",
//     vct2123: "User Interface Design",
//     // addClasses: function(){
//     //     return this.vct1121 + " AND " + this.vct1123
//     // }
// }

// object with Constructor syntax
let webClasses = new Object();
webClasses.vct1121 = "Introduction to HTML and CSS";
webClasses.vct1123 = "Interactive Web Design 1";
webClasses.vct2121 = "Responsive web Design";
webClasses.vct2123 = "User Interface Design";

let vct1121 = document.getElementById("vct1121");
vct1121.innerHTML = webClasses.vct1121;

let vct1123 = document.getElementById("vct1123");
vct1123.innerHTML = webClasses.vct1123;

let vct2121 = document.getElementById("vct2121");
vct2121.innerHTML = webClasses.vct2121;

let vct2123 = document.getElementById("vct2123");
vct2123.innerHTML = webClasses.vct2123;

function STUDENT(firstname, lastname, birthYear) {
  this.year = 2021;
  this.birthYear = birthYear;
  this.firstname = firstname;
  this.lastname = lastname;
  this.getAge = function () {
    return this.year - this.birthYear;
  };
}

let name1 = new STUDENT("Tunji", "Akanbi", 1974);
console.log(name1.getAge());

let name2 = new STUDENT("James", "Bond", 1955);
console.log(name2.firstname + " ," + name2.lastname + " ," + name2.getAge());
let agent = document.getElementById("agent");
agent.innerHTML =
  name2.firstname + " ," + name2.lastname + " ," + name2.getAge();

let series = {
  series1: ["one", "two", "three"],
  series2: ["four", "five", "six"],
  series3: ["seven", "eight", "nine"],
};
console.log(series.series3[2]);

let stats = [
  { num1: 150, num2: 300, num3: 600 },
  { num4: 200, num5: 400, num6: 800 },
  { num7: 1000, num8: 2000, num9: 3000 },
];
console.log(stats[2].num7);
console.log("pageYOffset is " + window.pageYOffset + "px");
console.log(document.lastModified);
console.log(window.history);

//window.alert("Hello EveryOne")

let openPopUp = function () {
  // window.open("https://www.century.edu");
  let mDate = new Date();
  let sDate = mDate.toDateString();
  let stuff = "";
  stuff += "<h1>Today is " + sDate + "</h1>";
  stuff +=
    '<p id="demo-child">Lorem, ipsum dolor sit amet </p>';
  let _demo = document.getElementById("demo");
  _demo.innerHTML = stuff;
};

// let mDate = new Date();
// let sDate = mDate.toDateString();
// let stuff = "";
// stuff += '<h1>Today is ' + sDate + '</h1>';
// stuff += '<p id="demo-child">Lorem, ipsum dolor sit amet consectetur adipisicing elit.Asperiores impedit id repellendus? Sapiente nihil dolorem,facilis distinctio culpa dignissimos ad.</p>';
// let _demo = document.getElementById("demo");
// _demo.innerHTML = stuff;
