### **_ 00P TYPESCRIPT _**

## class dan object

> > calss adalah sebuah blueprint (kerangka) untuk membuat object di dalam class juga menyimpan beberapa sifat dan perilaku sebuah object yang nantinya di namakan property dan method

**_class 01_**

```ts
class Hewan {}

const kodok = new Hewan();
const kucing = new Hewan();

console.log(kodok);
```

```bash
$ deno run class.ts
Hewan {}
```

**_class 02_**

```ts
class Hewan {}

const kodok = new Hewan();
const kucing = new Hewan();

console.log(typeof kodok);
```

```bash
$ deno run class.ts
object

```

**_class 03_**

```ts
class Hewan {}

const kodok = new Hewan();
const kucing = new Hewan();

console.log(typeof Hewan);
```

```bash
$ deno run class.ts
function
```

## construtrctor

> > construtrctor adalah sebuah method yang nanti akan di panggil terlebih dahulu ketika sebuah object di buat menggunakan class

```ts
class Hewan {
  constructor() {
    console.log("construtrctor akan selalu di panggil terlebih dahulu");
  }
}

const hewan = new Hewan();
```

```bash
$ deno run constructor.ts

construtrctor akan selalu di panggil terlebih dahulu
```

## Property & Method

> > dalam sebuah class atau blueprint itu tentunya harus ada sifat dan perilaku apa saja yang perlu di cantumkan dalam sebuah class
> > contoh : pada class hewan pasti pasti punya properti nama,kaki. misalkan kakinya ada berapa. dan apakah dia mamalia atau bukan
> > jadi pada sebuah class itu harus ada sifat dan perilaku seperti tersebut
> > setiap hewan juga punya sebuah method atau perilaku yang bernama misalkan bernafas

```ts
class Hewan3 {
  // <property>
  nama: string = "";
  kaki: number = 0;
  mamalia: boolean = false;
  // </property>
  //--------------------------------//
  // <method>
  bernafas() {
    console.log(`${this.nama} sedang bernafas`);
  }
  //   </method>
}

const hewan3 = new Hewan3();
console.log(hewan3);
```

```bash
$ deno run property_method.ts
Hewan3 { nama: "", kaki: 0, mamalia: false }
```

> > jadi kalau di dalam class variable bisa di sebut sebagai property. funcition yang berada di dalam sebuah class itu namanya method

> > lalu ketika ingin merubah property

```ts
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
```

```bash
$ deno run property_method.ts
Hewan3 { nama: "", kaki: 0, mamalia: false }
Hewan3 { nama: "Kucing", kaki: 4, mamalia: true }
Kucing sedang bernafas
```

## constructor 2

> > karena pembuatan object itu bakal memanggil method constructor terlebih dahulu maka kita bisa memanfaatkan constructor untuk memudahkan kita ketika membuat object

```ts
class Hewan4 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

const burung = new Hewan4("burung", 2);
console.log(burung);
```

```bash
$ deno run constructor2.ts
Hewan4 { nama: "burung", kaki: 2 }
```

- Ada juga cara yang lebih simple dalam constructor

```ts
class Hewan41 {
  constructor(public nama: string, public kaki: number) {}
}

const burung2 = new Hewan41("burung", 2);
console.log(burung2);
```

```bash
$ deno run constructor2.ts
Hewan41 { nama: "burung", kaki: 2 }
```

## Inheritance

> > inheritance atau pewarisan adalah sebuah konsep yang memungkinkan sebuah class bisa menurunkan property atau methodnya kepada class lain yang mengikutinya (exstends) atau bisa di sebut sebagai **parent and child Inheritance**

```ts
class Hewan4 {
  nama: string = "";
  kaki: number = 0;

  bernafas() {
    console.log("nafas");
  }
}

class Burung4 extends Hewan4 {
  warna: string = "merah";
}

const burung4 = new Burung4();
burung4.nama = "kenari";
burung4.kaki = 2;
burung4.warna = " kuning";
console.log(burung4);

burung4.bernafas();
```

```bash
$ deno run Inheritance.ts
Burung4 { nama: "kenari", kaki: 2, warna: " kuning" }
nafas
```

> > kalau di kasih exstends artinya si burung ini bagian dari si hewan

## Super Constructor

> > jadi Super Constructor digunakan untuk memanggil Constructor milik class parent (induk) yang mana proprty milik class parrent akan di isi melalui Constructor dari class child

---

Super constructor digunakan untuk memanggil constructor dari kelas induk (parent class) dalam kelas anak (child class). Ini memungkinkan kelas anak untuk mewarisi properti dan perilaku dari kelas induk, serta menambahkan atau mengubah perilaku tersebut.

Ketika Anda membuat kelas anak, Anda dapat menggunakan kata kunci super di dalam constructor kelas anak untuk memanggil constructor kelas induk. Ini dilakukan dengan tujuan untuk menjalankan logika constructor dari kelas induk dan menginisialisasi properti yang dimiliki oleh kelas induk. Dengan demikian, properti dari kelas anak dapat diisi melalui constructor kelas anak, sedangkan properti dari kelas induk dapat diinisialisasi melalui constructor kelas induk.

---

```ts
class Hewan5 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

class Katak5 extends Hewan5 {
  beracun: boolean;

  constructor(nama: string, kaki: number, beracun: boolean) {
    super(nama, kaki);
    this.beracun = beracun;
  }
}

const katak5 = new Katak5("katak", 4, false);

console.log(katak5);
```

```bash
$ deno run superconstructor.ts
Katak5 { nama: "katak", kaki: 4, beracun: false }
```

## Method Overriding

Method Overriding berfungsi untuk mereplace atau menggantikan method yang sudah ada di parrent class nya

```ts
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
```

```bash
$ deno run method_overriding.ts
malas
```

## Visibility

> > Visibility atau yang biasa di sebut acess modifier ini di gunakan untuk mengatur ayau membatasi akses dari property atau method yang ada pada sebuat class

> ada 3 macam Visibility:

- public : property atau method public ini bisa di panggil atau di gunakan dari mana saja

- protected : yang mana protected ini hanya bisa di gunakan oleh class itu sendiri bersrta turunan nya

- private : property atau method yang private dia bisa di panggil di dalam class itu sendiri

---

Visibility adalah sebuah konsep yang digunakan untuk mengatur akses terhadap property dan method pada sebuah class

---

```ts
// public
// protected
// private

class Hewan7 {
  public nama: string;
  private kaki: number;
  protected mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }
  //   ini yang mau mengakses
  berjalan() {
    this.nama;
    this.kaki;
    this.mamalia;
  }
}
// ----------------------------- //
class Katak7 extends Hewan7 {
  private umurTelur: number = 4;
  private umurKecebong: number = 7;
  private umurKatak: number = 90;

  getUmur() {
    console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
  }
}

const katak = new Katak7("dssc", 2, false);
console.log(katak);
```

```bash
$ deno run visibility.ts
Katak7 { nama: "dssc", kaki: 2, mamalia: false, umurTelur: 4, umurKecebong: 7, umurKatak: 90 }
```

## Readonly atau immutable

> > Readonly modifier digunakan agar suatu property tidak bisa di ubah datanya atau biasa di sebut dengan immutable

```ts
class Person {
  readonly gender: string = "pria";
}

const person = new Person();
person.gender = "wanita"; //Error: Cannot assign to 'gender' because it is a read-only property. (Tidak dapat mengassign ke 'gender' karena itu adalah properti yang hanya dapat dibaca (read-only).)
```

> > lalu bedanya sama const apa bang?
> > jika const hanya bisa di gunakan di variable biasa
> > kalau readonly hanya bisa di gunakan di property

## Getter & Setter

> > Getter & Setter di pakai untuk mengambil dan mengisi sebuah property dalam class yang mana sebelum melakukan get atau set ada beberapa proses yang harus di lakukan terlebih dahulu sebelum ia di simpan kedalam propertynya

_contoh:_

> > yang mana get atau setnya untuk memvalidasi data dan mengambil format data dari sebuah angka atau langsung ambil angkanya saja.

```ts
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
```

```bash
$ deno run getter_setter.ts
1900
```

## Static Property & Method

> > Static Property & Method yang ada pada class ini merupakan property atau method yang di menempel pada class itu sendiri bukan pada object yang nantinya sudah di hasilkan. jadi jika pada properti atau method yang bukan static (properti method yang biasa) itu kita harus menginisiasi class nya dulu (membuat objectnya dulu) agar bisa mengakses property dan methodnya dengan keyword `new` tentunya.
> > tetapi kalau pada static property atau methode ini kita bisa langsung panggil aja tanpa harus membuat object terlebih dahulu (jadi kita bisa langsung panggil properti atau method nya)

```ts
class Ayam {
  static kaki: number = 2;

  static jalan() {
    console.log(`ayam berjalan dengan ${this.kaki} kaki`);
  }

  //   method untuk GET kaki
  getKaki() {
    console.log(this.kaki); //eror karena kaki ini adalah static yang mana properti kaki ini menempel dengan classnya kalau kita menggunakan `this.kaki` artinya kaki merupakan properti dari object bukan class
    console.log(Ayam.kaki);
  }
}

console.log(Ayam.jalan());
```

```bash
$ deno run static_property_method.ts
ayam berjalan dengan 2 kaki
undefined
```

> > Jadi static ini bersifat global jadi jika kita merubah static propertynya maka semua object yang di buat dari class tersebut juga akan mengalami dampaknya

contoh:

```ts
const ayam3 = new Ayam();
const ayam4 = new Ayam();
const ayam5 = new Ayam();
const ayam6 = new Ayam();
const ayam7 = new Ayam();
const ayam8 = new Ayam();

console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());
console.log(ayam6.getKaki());
console.log(ayam7.getKaki());
console.log(ayam8.getKaki());
```

```bash
$ deno run static_property_method.ts
ayam berjalan dengan 2 kaki
undefined
2
undefined
2
undefined
2
undefined
2
undefined
2
undefined
2
undefined
```

> > Tapi bagaimana jika di ubah kakinya

```ts
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
```

```bash
$ deno run static_property_method.ts
ayam berjalan dengan 2 kaki
undefined
2
undefined
2
undefined
2
undefined
4
undefined
4
undefined
4
undefined
```

kenapa berubah?

> > Karena kali ini menempel ke classnya
> > `class Ayam {
  static kaki: number = 2;`

> > bukan ke objectnya:

`  getKaki() {
    console.log(Ayam.kaki);
  }`

> > Jadi kalau sudah banyak object yang sudah di buat dari class tersebut kemuadian class tersebut di ubah maka semuanya akan berpengaruh. tetapi kalau bukan `static` hanya kaki biasa (property masuk kedalam object) maka semua object tidak akan berpengaruh hanya terjadi di satu object itu saja

## Method Return Type

> > Return Type pada sebuah Method berfungsi untuk membatasi atau mengatur tipe apa yang akan di retrun oleh sebuah Method

```tsx

```
