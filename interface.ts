interface Android {
  name: string;
  menu(): void;
  home(): void;
  back(): void;
}

class Samsung implements Android {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  menu(): void {
    console.log("Menu clicked");
  }
  home(): void {
    console.log("Home clicked");
  }
  back(): void {
    console.log("Back clicked");
  }
}

class Asus implements Android {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  menu(): void {
    console.log("Menu clicked");
  }
  home(): void {
    console.log("Home clicked");
  }
  back(): void {
    console.log("Back clicked");
  }
}

class GameA {
  private phone: Android;

  constructor(phone: Android) {
    this.phone = phone;
  }

  back() {
    console.log("kembali ke menu utama di game");
  }

  menu() {
    this.phone.menu();
  }

  home() {
    this.phone.home();
  }
}

const samsung = new Samsung("A6");

const game = new GameA(samsung);

game.home();
game.back();
game.menu();

// -------Iphone------- //

interface Iphone {
  home(): void;
}

class Iphone11 implements Iphone {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  home(): void {
    console.log("mucul global");
  }
}
