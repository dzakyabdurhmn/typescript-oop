// Singkatnya Interface harus bertipe Object sedangkan type bisa langsung di deklarasikan dan juga bisa langsung seperti interface (object)

type Phone = string;
type PC = number;

type Mac = {
  name: string;
};

interface Laptop {
  name: string;
}

//Interface bisa di merge (bisa doble) sedangkan type tidak

interface Dinosaurus {
  nama: string;
}

interface Dinosaurus {
  berat: number;
}

// Jika kita meng-implementasikan Dinosaurus (Interface Dinosaurus) maka kita perlu 2 property (name dan berat)
class Velociraptor implements Dinosaurus {
  nama: "Velociraptor";
  berat: 10;
}

// Hal lain nya adalah dengan interface kita bisa implements dan exstend class dengan mudah tetapi tidak dengan type jadi pada materi sebalumnya (## Interface Extends Class) kalau interface bisa meng-exstend  sebuah class tetapi tidak dengan type. Sebenarnya type juga bisa di merge seperti interface tetapi dengan cara yang berberda lebih tepatnya bukan merge tetapi intersection

type Nama = {
  nama: string;
};

type Umur = {
  umur: number;
};

type AllStudent = Nama & Umur;

// dengan cara seperti ini kita bisa merge si-type ini

const Student1: AllStudent = {
  nama: "cut jasmine",
  umur: 17,
};

// jadi itu adalah cara menggabungkan beberapa type menjadi satu type

// Selain menggunakan `Nama & Umur` kita juga bisa menggunakan ***UNION*** `|` (memilih salah satu)

type UnionStudent = Nama | Umur;

const Student2: UnionStudent = {
  nama: "Cut Jasmine Utari putri zulani",
};

const Student3: UnionStudent = {
  umur: 17,
};

// Mungkin masih banyak cara selain cara yang di atas

// Pertanyaannya Kapan kita harus pakai Type dan kapan kita harus pakai interface?
