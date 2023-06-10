interface Product {
  shell(): void;
}

class CarProduct implements Product {
  shell(): void {
    console.log("Jual mobil");
  }
}

class MotorProduct implements Product {
  shell(): void {
    console.log("Jual motor");
  }
}

// funcition di gunakan untuk menjalankan
// beberapa method yang ada di dalam class
function shellProduct<T extends Product>(product: T[]): void {
  product.forEach((product) => product.shell());
}

const car = new CarProduct();
const motor = new MotorProduct();

shellProduct([car, motor]);
