// class Hewan8 {
//   static kaki: number = 4;
//   static bernafas() {
//     console.log("sedang bernafas");
//   }
// }

class Ayam {
  static kaki: number = 2;

  static jalan() {
    console.log(`ayam berjalan dengan ${this.kaki} kaki`);
  }

  //   method untuk GET kaki
  getKaki() {
    // console.log(this.kaki);
    console.log(Ayam.kaki);
  }
}

console.log(Ayam.jalan());

// ----------------------------

const ayam3 = new Ayam();
const ayam4 = new Ayam();
const ayam5 = new Ayam();
const ayam6 = new Ayam();
const ayam7 = new Ayam();
const ayam8 = new Ayam();

console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());

Ayam.kaki = 4;

console.log(ayam6.getKaki());
console.log(ayam7.getKaki());
console.log(ayam8.getKaki());
