type Generic2<Type> = Type;

function genericFuncition2<Type>(value: Type): Generic2<Type> {
  return value;
}

console.log(genericFuncition2<string>("Generic dari Type"));
