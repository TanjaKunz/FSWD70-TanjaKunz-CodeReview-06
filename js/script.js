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
    Loc.prototype.loadL = function () {
        return;
    };
    ;
    return Loc;
}());
;
/* ---------- class Sight ---------- */
// class Sight extends Location { 
//    handlebar;
//    bell;
//    constructor(topSpeed, size, wheels, seats, img, handlebar, bell) {
//        super(topSpeed, size, wheels, seats, img);
//        this.handlebar = handlebar;
//        this.bell = bell;
//    }
//    priceBike() {
//        return super.priceBySeat() + this.surchargeBike();
//    }
// }
// let bike1 = new Bike ("25", "small", "2", "1", "img/bike.jpg", "1", true);
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
