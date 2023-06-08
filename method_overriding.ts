class Hewan6 {
  name: string = "";

  //   method
  bernafas() {
    console.log("sedang bernafas");
  }
}

class Katak6 extends Hewan6 {
  bernafas() {
    console.log("malas");
  }
}

const katak6 = new Katak6();
katak6.bernafas();
