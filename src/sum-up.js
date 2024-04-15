// An example global method
export const SumUp = (...args) => {
  const initialValue = 0;
  const sumWithInitial = args.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial;
};


// An example class
export class Maths {
  constructor() {
    this.name = "ClassMaths";
  }

  get Name() {
    return this.name;
  }

  sum(...numbers) {
    return SumUp(...numbers);
  }
}
