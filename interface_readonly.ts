interface Student {
  readonly name: string;
  readonly age: number;
}

let jasmine: Student = { name: "jasmine", age: 17 };

// code di bawah ini bakalan eror karena kita memakai readonly
//EROR : Cannot assign to 'name' because it is a read-only property.
// EROR: Cannot assign to 'age' because it is a read-only property.
jasmine.name = "dzaky";
jasmine.age = 17;
