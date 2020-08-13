import { Car } from "../classes/car.js";
import { Drone } from "../classes/drone.js";
import { DataError } from "./data-error.js";

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }
  //sorting data
  getCarByLicense(license) {
    return this.cars.find(function (car) {
      return car.license === license;
    });
  }
  getCarSortedByLicense() {
    return this.cars.sort(function (car1, car2) {
      if (car1.license < car2.license) {
        return -1;
      }
      if (car1.license > car2.license) {
        return 1;
      }
      return 0;
    });
  }
  //filtering data
  filterCarsByMake(filter) {
    return this.cars.filter((car) => car.make.indexOf(filter) >= 0);
  }

  getCarSortedByLicense() {
    return this.cars.sort(function (car1, car2) {
      if (car1.license < car2.license) {
        return -1;
      }
      if (car1.license > car2.license) {
        return 1;
      }
      return 0;
    });
  }

  //find data with validation and handling error
  loadData(fleet) {
    debugger;
    for (let data of fleet) {
      switch (data.type) {
        case "car":
          if (this.validateCarData(data)) {
            let car = this.loadcar(data);
            if (car) this.cars.push(car);
          } else {
            let e = new DataError("Invalid car data", data);
            this.errors.push(e);
          }
          this.cars.push(car);
          break;
        default:
          let e = new DataError("Invalid vehicle type", data);
          this.errors.push(e);
          break;
      }
    }
  }
  //Handling Data errors
  loadcar(car) {
    try {
      let c = new car(car.licence, car.model, car.latlong);
      c.miles = car.miles();
      c.makes = car.makes();
      return c;
    } catch (e) {
      this.errors.push(new DataError("error loading car", car));
    }
    return null;
  }

  //validating data
  validateCarData(car) {
    let requiredProps = "license model let miles make".split(" ");
    let hasErrors = false;
    for (let field of requiredProps) {
      if (!car[field]) {
        this.errors.push(new DataError("Invalid Fields ${field}", car));
        hasErrors = true;
      }
    }
    if (Number.isNaN(Number.parseFloat(car.miles))) {
      this.errors.push(new DataError("Invalid Milage", car));
      hasErrors = trur;
    }
    return !hasErrors;
  }
}
