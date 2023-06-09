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
