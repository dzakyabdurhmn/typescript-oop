abstract class Hewan12 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makan(): void {
    console.log(`${this.name} Sedang makann`);
  }

  abstract bergerak(): void;
  //karena hewan bergeraknya masih belum jelas (ada yang berenang, terbang dan berjalan) maka kita kasih abstrac method. tapi sudah jelas ada nama dan bisa makan
}

class KucingClass extends Hewan12 {
  constructor() {
    super("kucing");
  }
  bergerak(): void {
    console.log("kucing berjalan");
  }
}

class BurungClass extends Hewan12 {
  constructor() {
    super("Manuk");
  }
  bergerak(): void {
    console.log("Burung Terbang");
  }
}

const kucing = new KucingClass();
kucing.bergerak();

const Burung = new BurungClass();
Burung.bergerak();
