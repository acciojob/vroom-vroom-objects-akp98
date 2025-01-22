// Car Constructor Function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding method to Car's prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar Constructor Function (inherits from Car)
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to initialize make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit methods from Car's prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding method to SportsCar's prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Example usage:
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Log the results in the console
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());
