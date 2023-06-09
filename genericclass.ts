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
