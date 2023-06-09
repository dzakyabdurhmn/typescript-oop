// menghubungkan interface dengan interface

interface Vehicle {
  name: string;
  whells: number;
}

interface Honda extends Vehicle {
  type: string;
  doors: number;
}

class Civic implements Honda {
  name: string = "Civic";
  type: string = "Turbo";
  whells: number = 4;
  doors: number = 5;
}

console.log(Civic);
