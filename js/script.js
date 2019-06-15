var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var main = document.getElementById('main');
/* ---------- basic Class ---------- */
var Loc = /** @class */ (function () {
    function Loc(category, name, address, ZIP, city, img) {
        this.category = "";
        this.name = "";
        this.address = "";
        this.ZIP = "";
        this.city = "";
        this.img = "";
        this.category = category;
        this.name = name;
        this.address = address;
        this.ZIP = ZIP;
        this.city = city;
        this.img = img;
    }
    ;
    Loc.prototype.display = function () {
        var box = document.createElement("div");
        box.classList.add('col-lg-3', 'col-md-6', 'col-sm-12', 'py-3', 'h5', 'd-flex', 'flex-wrap', 'box');
        main.appendChild(box);
        /* ---------- Image ---------- */
        var image = document.createElement("div");
        image.classList.add('col-lg-12', 'col-md-6', 'p-0', 'd-lg-block', 'd-md-block', 'd-sm-none', 'img');
        var pic = document.createElement("img");
        pic.classList.add('img-fluid');
        pic.setAttribute('src', this.img);
        pic.setAttribute('alt', this.name);
        image.appendChild(pic);
        box.appendChild(image);
        /* ---------- Info Box ---------- */
        var info = document.createElement("div");
        info.classList.add('col-lg-12', 'col-md-6', 'col-sm-12', 'p-lg-0', 'px-md-3', 'info');
        box.appendChild(info);
        /* ---------- Title ---------- */
        var title = document.createElement("div");
        title.classList.add('col-12', 'p-0', 'h4', 'title');
        var nodeName = document.createTextNode(this.name);
        title.appendChild(nodeName);
        info.appendChild(title);
        var line = document.createElement("hr");
        line.classList.add('col-12', 'my-0', 'px-0', 'py-1', 'hr');
        info.appendChild(line);
        /* ---------- Address ---------- */
        var street = document.createElement("p");
        street.classList.add('col-12', 'm-0', 'p-0', 'street');
        var nodeStreet = document.createTextNode(this.address);
        street.appendChild(nodeStreet);
        info.appendChild(street);
        var town = document.createElement("p");
        town.classList.add('col-12', 'm-0', 'p-0', 'town');
        var nodeTown = document.createTextNode(this.ZIP + ' ' + this.city);
        town.appendChild(nodeTown);
        info.appendChild(town);
    };
    ;
    return Loc;
}());
;
var zoo = new Loc("Sight", "Schönbrunn Zoo", "", "", "", "");
var gloriette = new Loc("Sight", "The Gloriette", "", "", "", "");
var ringstrasse = new Loc("Sight", "Vienna's Ringstrasse", "", "", "", "");
var cityHall = new Loc("Sight", "City Hall", "Friedrich-Schmidt-Platz 1", "1010", "Vienna", "img/cityhall.jpg");
/* ---------- class Restaurant ---------- */
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(category, name, address, ZIP, city, img, tel, type, web) {
        var _this = _super.call(this, category, name, address, ZIP, city, img) || this;
        _this.tel = tel;
        _this.type = type;
        _this.web = web;
        return _this;
    }
    ;
    Restaurant.prototype.displayRest = function () {
        _super.prototype.display.call(this);
        var tel = document.createElement("p");
        tel.classList.add('col-12', 'm-0', 'p-0', 'tel');
        var nodeTel = document.createTextNode('Tel:' + this.tel);
        tel.appendChild(nodeTel);
        info.appendChild(tel);
        // var info = (Loc.(this.box)).find(); '''''''''''''''''''''''''''''''''
    };
    ;
    return Restaurant;
}(Loc));
;
var rest1 = new Restaurant("", "Zhany", "Schwarzenbergplatz", "1040", "Vienna", "img/zhany.jpg", "01 504 15 25", "Asian", "www.zhany.at");
// let rest1 = new Restaurant ();
// let rest1 = new Restaurant ();
// let rest1 = new Restaurant ();
var arr = [zoo, gloriette, ringstrasse, cityHall, rest1];
for (var i = 0; i < arr.length; i++) {
    arr[i].display();
}
;
/* ---------- class Event ---------- */
// class Events extends Loc { 
//   date;
//   time;
//   price;
//   webPage;
//   constructor(category, name, address, ZIP, city, img, date, time, price, webPage) {
//     super(category, name, address, ZIP, city, img);
//     this.date = date;
//     this.time = time;
//     this.price = price;
//     this.webPage = webPage;
//   };
//   
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
