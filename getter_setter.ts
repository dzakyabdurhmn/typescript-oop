class ProductA {
  private _price: number = 0;
  private discount: number = 0.05;

  //   kalau mau akses _price harus melalui retrun
  get price() {
    return this._price;
  }

  set price(value: number) {
    this._price = value - value * this.discount;
  }
}

const productA = new ProductA();
productA.price = 2000;
console.log(productA.price);
