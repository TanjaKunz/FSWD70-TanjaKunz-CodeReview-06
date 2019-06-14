/* ---------- basic Class ---------- */
var Loc = /** @class */ (function () {
    function Loc(name, address, ZIP, city, img) {
        this.name = "";
        this.address = "";
        this.ZIP = "";
        this.city = "";
        this.img = "";
        this.name = name;
        this.address = address;
        this.ZIP = ZIP;
        this.city = city;
        this.img = img;
    }
    ;
    Loc.prototype.display = function () {
    };
    ;
    return Loc;
}());
;
var zoo = new Loc("Schönbrunn Zoo", "", "", "", "");
var gloriette = new Loc("The Gloriette", "", "", "", "");
var ringstrasse = new Loc("Vienna's Ringstrasse", "", "", "", "");
var cityHall = new Loc("City Hall", " Friedrich-Schmidt-Platz 1", "1010", "Vienna", "img/cityhall.jpg");
/* ---------- class Restaurant ---------- */
// class Restaurant extends Loc { 
//   tel;
//   type;
//   web;
//   constructor(name, address, ZIP, city, img, tel, type, web) {
//     super(name, address, ZIP, city, img);
//     this.tel = tel;
//     this.type = type;
//     this.web = web;
//   };
//   loadRest() {
//     return
//   };
//   display() {
//     return super.display() + this.loadRest();
//   };
// };
// let rest1 = new Restaurant ();
// let rest1 = new Restaurant ();
// let rest1 = new Restaurant ();
// let rest1 = new Restaurant ();
// console.log();
/* ---------- class Event ---------- */
// class Events extends Loc { 
//   date;
//   time;
//   price;
//   constructor(name, address, ZIP, city, img, date, time, price) {
//     super(name, address, ZIP, city, img);
//     this.date = date;
//     this.time = time;
//     this.price = price;
//   };
//   loadEvent() {
//     return
//   };
//   display() {
//     return super.display() + this.loadRest();
//   };
// };
// let event1 = new Event ();
// let event2 = new Event ();
// let event3 = new Event ();
// let event4 = new Event ();
// console.log(bike1.priceBike());
// var box = document.getElementById('box');
// var data = [bike1, motorbike1, car1,caravan1];
// console.log(data);
// for (var i = 0; i < data.length; i++) {
//   var box1 = document.createElement("div");
//   box1.classList.add("col-6");
//   box.appendChild(box1);
//     for (let i = 1; i <= data.length; ++i) {
//       var pic = document.createElement("img");
//       pic.setAttribute("src", data[i].img);
//       let text = Object[i].values(data);
//       var figCap = document.createElement("p");
//       figCap.innerHTML = text;
//       }
// }
