/* ---------- basic Class ---------- */

class Loc {
  name = "";
 	address = "";
 	ZIP ="";
  city = "";
 	img = "" 

	constructor(name, address, ZIP, city, img) { 
       this.name = name;
       this.address = address;
       this.ZIP = ZIP;
       this.city = city;
       this.img = img;
  };

  display() {
       return ;
  };
};

let zoo = new Loc ("Schönbrunn Zoo", "", "", "", "");
let gloriette = new Loc ("The Gloriette", "", "", "", "");
let Ringstrasse = new Loc ("Vienna's Ringstrasse", "", "", "", "");
let City Hall = new Loc ("City Hall", " Friedrich-Schmidt-Platz 1", "1010", "Vienna", "img/cityhall.jpg");



/* ---------- class Restaurant ---------- */

class Restaurant extends Loc { 
  tel;
  type;
  web;

  constructor(name, address, ZIP, city, img) {
    super(name, address, ZIP, city, img);
    this.tel = tel;
    this.type = type;
    this.web = web;
  };

  loadRest() {
    return
  };

  displayRest() {
    return super.display() + this.loadRest();
  };
};

let rest1 = new Restaurant ();
console.log(bike1.priceBike());







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