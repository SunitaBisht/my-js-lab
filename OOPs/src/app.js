//create a simple class

/* class Drone {}
let drone = new Drone();

console.log(drone instanceof Drone); */

//------------constructor with parameter
//instance variable

/* class Drone {
  constructor(id, name) {
    this.id = id;          //instance properties
    this.name = name;
  }
}
let drone = new Drone("A123", "flyer");
console.log("drone:" + drone.id + " " + drone.name);
 */

//-----------instance variable and Static variable ////instance propery access with this keyword
/* class Drone {
  constructor(id, name) {
    this.id = id;            //instance properties
    this.name = name;
  }
}
Drone.maxHeight = "2000";      //Static properties/direct property

let drone = new Drone("A123", "Flyer");
let drone1 = new Drone("B123", "Twirl");

console.log("drone:" + drone.id + " " + drone1.id);

console.log(drone.maxHeight); */

//---------------create method -------------

/* class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  fly() {               //method
    console.log("Drone " + this.id + " " + this.name + " is flying ");
  }
}
let drone = new Drone("A123", "Flyer");
let drone1 = new Drone("B123", "Twirl");

drone.fly();
drone1.fly(); */

//---------------create Static method-------------

/* class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  static getCompany() {            //static method
    console.log(this.id);
  }
  fly() {
    console.log("Drone " + this.id + " " + this.name + " is flying ");
  }
}
let drone = new Drone("A123", "Flyer");
let drone1 = new Drone("B123", "Twirl");

drone.fly();
drone1.fly();

Drone.getCompany(); */

//---------------------getter and setter------------------------

/* class Drone {
  constructor(id) {
    this._id = id;
  }
  get id() {
    console.log("in id getter");
    return this._id + " temporary";
  }
  set id(value) {
    this._id = value;
  }
}
let drone = new Drone("A123");
drone.id = "B456";
console.log("drone id:" + drone.id); */

//--Inheritance--------------------------------------------------

//-------------- //inheriting constructor

/* class Vehicle {
  constructor(licenseNum) {
    this.licenseNum = licenseNum;
  }
}
class Drone extends Vehicle {}
class Car extends Vehicle {
  constructor(licenseNum) {
    super(licenseNum);
  }
}
let c = new Car("A123");
console.log(c.licenseNum); */

//------------inheriting Properties---

/* class Vehicle {
  constructor() {
    this.gpsEnabled = true;
  }
}
class Drone extends Vehicle {}
class Car extends Vehicle {
  constructor() {
    super();
    this.gpsEnabled = false;
  }
}
let c = new Car();   //derive class change the value of base class
console.log(c.gpsEnabled); */

//-------------inheriting methods-------(instance method And static method)------

/* class Vehicle {
  start() {
    //instance method
    console.log(" starting Vehicle");
  }

  static getCompanyName() {
    console.log("My Company");
  }
}
class Car extends Vehicle {
  start() {
    super.start();
    console.log(" starting Car");
  }
  static getCompanyName() {
    super.getCompanyName();
    console.log("Other Company");
  }
}
let c = new Car();
c.start(); //instance method access by obj name
Car.getCompanyName(); */ //static method access by class name

//Organizing classes

/* import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";
import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";

let dataService = new FleetDataService();
dataService.loadData(fleet);

//let car = dataService.getCarByLicense("A123");

//let cars = dataService.getCarSortedByLicense();
let cars = dataService.filterCarsByMake("e");

for (let car of cars) console.log(car.make); */

//Use Interface classes

/* import $ from "jQuery";
import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";
import { fleet } from "./fleet-data.js";
import { fleetDataService } from "./Services/fleet-data-service.js";
import { Button } from "./ui/button.js";
import { Image } from "./ui/Image.js";
import { TitleBar } from "./ui/title-bar.js";
import { DataTable } from "./ui/data-table.js";
import { GoogleMap } from "./ui/google-map.js";

//button
let b = new Button("click me");
b.appendToElement($("body"));

//image
let i = new Image("../images/drone.jpg");
i.appendToElement($(body));

//titlebar
let tb = new TitleBar("our Application");
tb.addLink("Home", " ");
tb.addLink("Cars", " ");
tb.addLink("Drones", " ");
tb.addLink("Map", " ");
tb.appendToElement($("body"));

//datatable
let headers = "License Make Models Miles".split("");
let dataService = new fleetDataService(fleet);

dataService.loadData(fleet);
let dt = new DataTable(headers, dataService.Cars);
dt.appendToElementbody($("body"));

//googlemap
let centerOfMap = { lat: 40.4543, lng: -34.34 };
let map = new GoogleMap(centerOfMap, dataService.Cars);

map.appendToElement($("body")); */

//Building Application Uses Classes

import $ from "jQuery";
import { fleet } from "./fleet-data.js";
import { fleetDataService } from "./Services/fleet-data-service.js";
import { ApplicationBase } from "./framework/application-base.js";
import { HomePage } from "./home-page.js";
import { CarsPage } from "./car-page.js";
import { MapPage } from "./map-page.js";

export class App extends ApplicationBase {
  constructor() {
    super("fleet Manager");
    this.dataService = new FleetDataService();
    this.dataService.loadData(fleet);

    this.addRoute("Home", new HomePage(), true);
    this.addRoute("Cars", new CarsPage());
    this.addRoute("Dorns", null, true);
    this.addRoute("Maps", new MapPage());
  }
}

export let application = new App();
application.show($("body"));
