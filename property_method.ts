class Hewan3 {
  // <property>
  nama: string = "";
  kaki: number = 0;
  mamalia: boolean = false;
  // <method>
  bernafas() {
    console.log(`${this.nama} sedang bernafas`);
  }
}

const hewan3 = new Hewan3();
console.log(hewan3);

hewan3.kaki = 4;
hewan3.nama = "Kucing";
hewan3.mamalia = true;

console.log(hewan3);

hewan3.bernafas();
