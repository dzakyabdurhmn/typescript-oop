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
