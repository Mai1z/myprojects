class Plane1 {
  constructor(name) {
    this.name = name;
  }
  start () {
    console.log(`${this.name} Взлетает.`);
  }
  land () {
    console.log(`${this.name} Приземляется.`);
  }
}

// Наследуем от Plane1 
class Plane2 extends Plane1 {
  attack () {
    console.log(`${this.name} Атакует.`);
  }
}

let TY = new Plane1("TY-154");
let Mig = new Plane2("MIG");

Mig.start();
Mig.land();
Mig.attack();
TY.start();