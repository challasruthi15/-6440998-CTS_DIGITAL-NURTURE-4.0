// "Interface" simulation: we expect classes to implement play()

class Guitar {
  play() {
    console.log("Playing the guitar: strum strum 🎸");
  }
}

class Piano {
  play() {
    console.log("Playing the piano: plink plonk 🎹");
  }
}

// Instantiate classes
const guitar = new Guitar();
const piano = new Piano();

// Call the play method
guitar.play();  // Output: Playing the guitar: strum strum 🎸
piano.play();   // Output: Playing the piano: plink plonk 🎹
