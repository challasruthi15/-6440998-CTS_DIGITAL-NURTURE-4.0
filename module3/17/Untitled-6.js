// Define the Car class
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  displayDetails() {
    console.log(`Car: ${this.make} ${this.model} (${this.year})`);
  }
}

// Create instances (objects) of the Car class
const car1 = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "Civic", 2020);

// Call the method to display details
car1.displayDetails();  // Output: Car: Toyota Camry (2022)
car2.displayDetails();  // Output: Car: Honda Civic (2020)
