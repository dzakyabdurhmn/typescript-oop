// function DapatkanData(nilai: any) {
//   return nilai;
// }

// const data1 = DapatkanData("test");
// console.log(data1);

// ------------------- //

function getKumpulan<Type>(nilai: Type): Type {
  return nilai;
}

const data = getKumpulan<string>("ini adalah generic");
console.log(data.toLocaleUpperCase());

const data2 = getKumpulan<number>(1000);
console.log(data2.toFixed(2));
