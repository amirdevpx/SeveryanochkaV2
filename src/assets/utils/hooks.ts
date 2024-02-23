export const calcPrice = (price: number, discount: number): number =>
  price - (price / 100) * discount;
