import { Vehicle } from "./vehicle.js";

export class Drone extends Vehicle {
  constructor(licence, model, latLong) {
    super(licence, model, latLong);
    this.airTimeHours = null;
    this.base = null;
  }
}
