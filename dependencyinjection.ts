// class Store {
//   private name: string = "Toko A";
//   private profit: number = 1000;

//   getName(): string {
//     return this.name;
//   }

//   getProfit(): number {
//     return this.profit;
//   }
// }

// class FasionProduct {
//   private store: Store;
//   private name: string;
//   private price: number;

//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;

//     this.store = new Store();
//   }
//   shell(): void {
//     console.log(
//       `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
//     );
//   }
// }

// const baju = new FasionProduct("baju lengan panjang", 50000);
// baju.shell();

// depedensi injection

interface IToko {
  name: string;
  profit: number;
  getProfit(): number;
}

class Toko1 implements IToko {
  name: string = "Toko lama";
  profit: number = 90000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class Toko2 implements IToko {
  name: string = "Toko 2";
  profit: number = 3232323;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class HijabProduct {
  private toko: IToko;
  private name: string;
  private price: number;

  constructor(toko: IToko, name: string, price: number) {
    this.name = name;
    this.price = price;

    this.toko = new Toko2();
  }

  shell(): void {
    console.log(
      ` harga ${this.name} adalah  ${this.toko.getProfit() + this.price} `
    );
  }
}

class BajuProduct {
  private toko: IToko;
  private name: string;
  private price: number;

  constructor(toko: IToko, name: string, price: number) {
    this.name = name;
    this.price = price;

    this.toko = new Toko1();
  }

  shell(): void {
    console.log(
      ` harga ${this.name} adalah  ${this.toko.getProfit() + this.price} `
    );
  }
}

const tokolama = new Toko2();
const tokobaru = new Toko1();

const bajumerah = new BajuProduct(tokolama, "baju mahal", 80000);
const hijab = new HijabProduct(tokolama, "baju mahal", 80000);

// console.log(hijab);
// console.log(bajumerah);

hijab.shell();
bajumerah.shell();
