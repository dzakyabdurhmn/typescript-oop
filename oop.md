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
