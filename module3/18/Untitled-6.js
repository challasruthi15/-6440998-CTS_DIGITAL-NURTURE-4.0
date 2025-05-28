// Base class
class Animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

// Subclass extending Animal
class Dog extends Animal {
  // Override makeSound method
  makeSound() {
    console.log("Bark");
  }
}

// Create instances
const genericAnimal = new Animal();
const myDog = new Dog();

// Call methods
genericAnimal.makeSound();  // Output: Some generic animal sound
myDog.makeSound();          // Output: Bark
