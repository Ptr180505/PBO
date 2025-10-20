class Vehicle {
  move() {
    console.log("Kendaraan bergerak");
  }
}

class Car extends Vehicle {
  // overriding
  move() {
    console.log("Mobil berjalan di jalan raya");
  }
}

class Boat extends Vehicle {
  // overriding
  move() {
    console.log("Kapal berlayar di laut");
  }
}

// Membuat objek dari masing-masing class
const vehicle = new Vehicle();
const car = new Car();
const boat = new Boat();

// Memanggil method move() dari tiap objek
vehicle.move(); // Output: Kendaraan bergerak
car.move();     // Output: Mobil berjalan di jalan raya
boat.move();    // Output: Kapal berlayar di laut
