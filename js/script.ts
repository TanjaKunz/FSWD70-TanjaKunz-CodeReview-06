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
    let content = `
      <div class="col-lg-3 col-md-6 col-sm-12 py-3 h5 d-flex flex-wrap box">
        <div class="col-lg-12 col-md-6 mb-3 p-0 d-none d-lg-block d-md-block img">
          <img class="img-fluid" src="${this.img}" alt="${this.name}">
        </div>

        <div class="col-lg-12 col-md-6 col-sm-12 p-lg-0 px-md-3 info">
          <div class="col-12 p-0 h4 title"> ${this.name} </div>

          <hr class="col-12 my-0 px-0 py-1 hr">

          <p class="col-12 m-0 p-0 street"> ${this.address} </p>
          <p class="col-12 m-0 p-0 city"> ${this.ZIP} ${this.city} </p>
        </div>
      </div>`;

    main.innerHTML += content;
  };  
};

let zoo = new Loc ("Sight", "Zoo Schönbrunn", "Maxingstraße 13b", "1130", "Vienna", "img/schoenbrunn.jpg");
let gloriette = new Loc ("Sight", "The Gloriette", "Schönbrunner Schlossstraße", "1130", "Vienna", "img/gloriette.jpg");
let library = new Loc ("Sight", "Austrian National Library", "Josefsplatz 1", "1010", "Vienna", "img/library.jpg");
let cityHall = new Loc ("Sight", "City Hall", "Friedrich-Schmidt-Platz 1", "1010", "Vienna", "img/cityhall.jpg");



/* ---------- class Restaurant ---------- */

class Restaurant extends Loc { 
  tel;
  type;
  web;

  constructor(category, name, address, ZIP, city, img, tel, type, web) {
    super(category, name, address, ZIP, city, img);
    this.tel = tel;
    this.type = type;
    this.web = web;
  };

  display() {
    var box = document.createElement("div");
    box.classList.add('col-lg-3', 'col-md-6', 'col-sm-12', 'py-3', 'h5', 'd-flex', 'flex-wrap', 'box');   
    main.appendChild(box);

    /* ---------- Image ---------- */
    var image = document.createElement("div");
    image.classList.add('col-lg-12', 'col-md-6', 'mb-3', 'p-0', 'd-none', 'd-lg-block', 'd-md-block', 'img');

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

    /* ---------- Telefon ---------- */
    var phone = document.createElement("p");
    phone.classList.add('col-12', 'm-0', 'pt-2', 'px-0', 'tel');

    var nodePhone = document.createTextNode('Tel: ' + this.tel);
    phone.appendChild(nodePhone);

    info.appendChild(phone);

    /* ---------- Web ---------- */
    var www = document.createElement("p");
    www.classList.add('col-12', 'm-0', 'p-0', 'web');

    var link = document.createElement("a");
    link.setAttribute('href', this.web);
    www.appendChild(link);

    var nodeWww = document.createTextNode(this.web);
    link.appendChild(nodeWww);

    info.appendChild(www);    
  };
};

let rest1 = new Restaurant ("", "Zhany", "Schwarzenbergplatz", "1040", "Vienna", "img/zhany.jpg", "01 504 15 25", "Asian", "http://zhany.at/");
// let rest1 = new Restaurant ();
// let rest1 = new Restaurant ();
// let rest1 = new Restaurant ();


/* ---------- class Event ---------- */

class Events extends Loc { 
  date;
  time;
  price;
  webPage;

  constructor(category, name, address, ZIP, city, img, date, time, price, webPage) {
    super(category, name, address, ZIP, city, img);
    this.date = date;
    this.time = time;
    this.price = price;
    this.webPage = webPage;
  };

  display() {
    var box = document.createElement("div");
    box.classList.add('col-lg-3', 'col-md-6', 'col-sm-12', 'py-3', 'h5', 'd-flex', 'flex-wrap', 'box');   
    main.appendChild(box);

    /* ---------- Image ---------- */
    var image = document.createElement("div");
    image.classList.add('col-lg-12', 'col-md-6', 'mb-3', 'p-0', 'd-none', 'd-lg-block', 'd-md-block', 'img');

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

    /* ---------- Date ---------- */
    var date = document.createElement("p");
    date.classList.add('col-12', 'm-0', 'px-0', 'tel');

    var nodeDate = document.createTextNode(this.date + ' ' + this.time);
    date.appendChild(nodeDate);

    info.appendChild(date);

    /* ---------- Address ---------- */
    var street = document.createElement("p");
    street.classList.add('col-12', 'm-0', 'pt-2', 'px-0', 'street');

    var nodeStreet = document.createTextNode(this.address);
    street.appendChild(nodeStreet);

    info.appendChild(street);


    var town = document.createElement("p");
    town.classList.add('col-12', 'm-0', 'p-0', 'town');

    var nodeTown = document.createTextNode(this.ZIP + ' ' + this.city);
    town.appendChild(nodeTown);

    info.appendChild(town);    

    /* ---------- Web ---------- */
    var www = document.createElement("p");
    www.classList.add('col-12', 'm-0', 'p-0', 'web');

    var link = document.createElement("a");
    link.setAttribute('href', this.webPage);
    www.appendChild(link);

    var nodeWww = document.createTextNode('Homepage');
    link.appendChild(nodeWww);

    info.appendChild(www);    
  };

  
};

// category, name, address, ZIP, city, img, date, time, price, webPage 

let event1 = new Events ("Event", "A Tribute To Vienna", "Michaelerplatz 1", "1010", "Vienna", "img/hofreitschule01.png", "21.6.2019", "19:00", "starting from  € 53.00", "https://www.srs.at/en/tickets-events/a-tribute-to-vienna-with-boyschoir-2019/");
// let event2 = new Event ();
// let event3 = new Event (); 
// let event4 = new Event ();




var arr = [zoo, library, cityHall, gloriette, rest1, event1];


for (let i = 0; i < arr.length; i++) {
  arr[i].display();
};






