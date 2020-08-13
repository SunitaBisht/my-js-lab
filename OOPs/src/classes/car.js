import { Vehicle } from "./vehicle.js";

export class Car extends Vehicle {
  constructor(licence, model, latlong) {
    super(licence, model, latlong);
    this.miles = null;
    this.make = null;
  }
}
