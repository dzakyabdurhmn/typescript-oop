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

- string

```tsx
class Burung {
  private kaki: number = 2;

  getKaki(): number {
    return this.kaki;
  }
```

Pada bagian `getKaki()` kita mencantumkan type apa yang harus di kembalikan ketika kita memakai method ini `:string`

- void (tidak mengembalikan nilai apa apa)

```tsx
class Burung {
  private kaki: number = 2;


  terbang(): void {
    console.log("terbang");
  }
```

jika kita menggunakan `void` maka methodnya tidak mengembalikan apa apa, jika kita mengisinya menggunakan number itu pasti eror karena `number` atau `string` itu membutuhkan sebuah `retrun`, tapi kalau `void` ga boleh ada `retrun`nya

- Fungsi atau method yang melibatkan asynchronous

```tsx
class Burung {
  private kaki: number = 2;

  async makan(): Promise<string> {
    return "string";
  }
}
```

asynchronous itu harus menunggu yang di mana hasil dari asynchronous itu selesai

## Abstract Class

> > Abstract Class adalah sebuah class yang tidak bisa di instiasi secara langsung oleh client karena memang bentuknya belum jelas (abstrak). Abstract C lass juga bisa juga sebagai teampleate yang mana di setiap class yang meng exstends-nya harus mengimplementasikan method yang sudah di tentukan oleh abstrak class ini. ada aturan-nya lagi, pada abstrak class harus ada (memiliki) satu absrak method

```ts
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
```

```bash
$ deno run abstract_class.ts
kucing berjalan
Burung Terbang
```

> jadi dari sini kita bisa tau bahwa abstrac class ini (` abstract bergerak(): void;`) membuat 1 aturan bahwa jika ada class yang mengekstend class Hewan12 `abstract class Hewan12 {
` dia wajib ada satu method yang namanya bergerak

## Interface

> > Interface merupakan sebuah perjanjian atau kontrak yang mana semua property atau method yang sudah di sepakati di dalam Interface itu harus di implementasikan kepada class yang menggunakan Interface tersebut

```ts
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
```

## Interface Optional Property

> > Interface Optional Property pada sebuah interface kita bisa mengabaikan property pada interface yang sifatnya opsional

```ts
interface Teacher {
  name: string;
  age: number;
  phone?: string;
}

let teacher: Teacher = { name: "Pak joko", age: 23 };
let teacher2: Teacher = { name: "Pak solikhin", age: 20, phone: "08123456789" };
```

## Interface Readonly Property

> > Interface Readonly Property pada sebuah interface kita TIDAK BISA MERUBAH interface tersebut

```ts
interface Student {
  readonly name: string;
  readonly age: number;
}

let jasmine: Student = { name: "jasmine", age: 17 };

<| END CODE |>

// code di bawah ini bakalan eror karena kita memakai readonly
//EROR : Cannot assign to 'name' because it is a read-only property.
// EROR: Cannot assign to 'age' because it is a read-only property.
jasmine.name = "dzaky";
jasmine.age = 17;
```

## Interface Inheritance

> > Interface Inheritance memungkinkan kita untuk meng-exstend (meng-implementasikan) interface yang lainnya

```tsx
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
```

## Interface Extends Class

> > yang unik pada typescript adalah selain dia bisa meng-exstends interface (`interface Abd extends Vehicle`) di typescript Interface juga meng-exstends sebuah class

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface IShark extends Animal {
  swim(): void;
}

class Shark implements IShark {
  name: string = "Hiu";

  constructor(name: string) {
    this.name = name;
  }

  swim(): void {
    console.log("Hiu sedang berenang di laut");
  }
}
```

## Dependency Injection

> > Dengan adanya interface kita bisa meng-inject sebuah class kedalam class lain secara dinamis

```ts
class Store {
  private name: string = "Toko A";
  private profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class FasionProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store();
  }
  shell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

const baju = new FasionProduct("baju lengan panjang", 50000);
baju.shell();
```

<!-- Kode di atas sudah jadi dan tidak tedapat masalah tetapi akan terdapat masalah jika kode di atas berjumlah ribuan (banyak) maka dari itu kita butuh depedensi injection -->

```ts
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
```

## Generics

> > Generics menjadikan sebuah funcition,class atau interface memiliki berbagai tipe data yang lebih dinamis (NB: Untuk materi tentang Generics tidak memiliki hubungan langsung dengan OOP hanya sebuah tambahan)

```ts
function DapatkanData(nilai: any) {
  return nilai;
}

const data1 = DapatkanData("test");
console.log(data1);
```

```bash
$ deno run Generics.ts
test

```

Maka tidak ada masalah karena valuenya `any` (bebas kita mau memasang apa aja) tetapi memiliki kelemahan yaitu jika kita menggunakan tipe data `any` maka kita tidak bisa mendeteksi tipe data apa yang sedang di input, yang dimana nantinya kita tidak bisa menggunakan fungsi length (untuk menghitung karakter di dalam string) atau kita juga tidak bisa menggunakan fitur `to lowercase` (untuk membuat sebuah `string` menjadi huruf kecil semua ) dan sebagainya

<!-- Data yang Generic: -->

```ts
function getKumpulan<Type>(nilai: Type): Type {
  return nilai;
}

const data = getKumpulan<string>("ini adalah generic");
console.log(data.toLocaleUpperCase());

const data2 = getKumpulan<number>(1000);
console.log(data2.toFixed(2));
```

```bash
$ deno run Generics.ts
INI ADALAH GENERIC
1000.00
```

## Generic Interface

> > Jadi kita akan menanam generic di dalam interface

```ts
interface Generic<Type> {
  props: Type;
}

function genericFuncition<Type>(value: Type): Generic<Type> {
  let data: Generic<Type> = {
    props: value,
  };
  return data;
}

console.log(genericFuncition<string>("Generic Interface"));
console.log(genericFuncition<number>(5432).props);
console.log(genericFuncition<boolean>(true));
```

```bash
$ deno run genericinterface.ts
{ props: "Generic Interface" }
5432
{ props: true }
```

## Generics Type

> > Sebenarnya TIDAK jauh beda dengan Generic Interface hanya merubah menjadi `type`

```ts
type Generic2<Type> = Type;

function genericFuncition2<Type>(value: Type): Generic2<Type> {
  return value;
}

console.log(genericFuncition2<string>("Generic dari Type"));
```

```bash
$ deno run generictype.ts
Generic dari Type
```

## Generic Class

> > Generic yang di implementasikan pada sebuah class

```ts
interface Generic3<Type> {
  props: Type;
  methodA(): Type;
}

class GenericClass<Type> implements Generic3<Type> {
  props: Type;

  constructor(prop: Type) {
    this.props = prop;
  }

  methodA(): Type {
    return this.props;
  }
}

const genericClassA = new GenericClass<number>(123);
console.log(genericClassA.methodA());
```

```bash
$ deno run genericclass.ts
123
```

## Generics Class 2

> > Generic yang di implementasikan pada sebuah class (membuat generic yang mana type dari genericnya adalah sebuah class yang sebelumnya kan hanya `number` atau `string` yaa untuk Generic sekarang kita masukan class kedalam tipe data genericnya)

```ts
class PropsClassA {
  name: string = "class A";
}

class PropsClassBaru<Type> {
  classProps: Type;

  constructor(classProps: Type) {
    this.classProps = classProps;
  }
}

const classA = new PropsClassA();
const ClassBaru = new PropsClassBaru(classA);

console.log(classA);
console.log(ClassBaru);
```

```bash
$ deno run genericclass2.ts
PropsClassA { name: "class A" }
PropsClassBaru { classProps: PropsClassA { name: "class A" } }
```

## Generics Constraint

> > Terkadang kita juga butuh menampilkan beberapa options setiap types yang masuk di dalam generic

```ts
interface Length {
  length: number;
}

function Genericsconstraint<Type extends Length>(argumen: Type): Type {
  console.log(argumen.length);
  return argumen;
}

const C_Genericsconstraint = Genericsconstraint("Generics constraint(yaaa)");
console.log(C_Genericsconstraint);

const C2_Genericsconstraint = Genericsconstraint({ length: 10, value: 200 });
```

```bash
$ deno run Genericsconstraint.ts
25
Generics constraint(yaaa)
10
```

## Generics Class Constraint
