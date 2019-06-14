var main = document.getElementById('main');

/* ---------- basic Class ---------- */
class Loc {
  category = "";
  name = "";
 	address = "";
 	ZIP ="";
  city = "";
 	img = "" 

	constructor(category, name, address, ZIP, city, img) { 
    this.category = category;
    this.name = name;
    this.address = address;
    this.ZIP = ZIP;
    this.city = city;
    this.img = img;
  };

  display() {
    var box = document.createElement("div");
    box.classList.add('col-lg-3', 'col-md-6', 'col-sm-12', 'py-3', 'h5', 'd-flex', 'flex-wrap', 'box');   
    main.appendChild(box);

    /* ---------- Image ---------- */
    var image = document.createElement("div");
    image.classList.add('col-12', 'p-0', 'd-lg-block', 'd-md-block', 'd-sm-none', 'img');

    var pic = document.createElement("img");
    pic.classList.add('img-fluid');
    pic.setAttribute('src', this.img);
    pic.setAttribute('alt', this.name);

    image.appendChild(pic);   

    box.appendChild(image);

    /* ---------- Title ---------- */
    var title = document.createElement("div");
    title.classList.add('col-12', 'p-0', 'h5', 'title');

    var nodeName = document.createTextNode(this.name);
    title.appendChild(nodeName);

    box.appendChild(title);





      
  };
};

let zoo = new Loc ("Sight", "Schönbrunn Zoo", "", "", "", "");
let gloriette = new Loc ("Sight", "The Gloriette", "", "", "", "");
let ringstrasse = new Loc ("Sight", "Vienna's Ringstrasse", "", "", "", "");
let cityHall = new Loc ("Sight", "City Hall", "Friedrich-Schmidt-Platz 1", "1010", "Vienna", "img/cityhall.jpg");

var arr = [zoo, gloriette, ringstrasse, cityHall];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  arr[i].display();
};

/* ---------- class Restaurant ---------- */

// class Restaurant extends Loc { 
//   tel;
//   type;
//   web;

//   constructor(category, name, address, ZIP, city, img, tel, type, web) {
//     super(category, name, address, ZIP, city, img);
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

//   constructor(category, name, address, ZIP, city, img, date, time, price) {
//     super(category, name, address, ZIP, city, img);
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