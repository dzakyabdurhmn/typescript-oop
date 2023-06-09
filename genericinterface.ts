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
