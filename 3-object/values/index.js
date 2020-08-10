export default function countTypesNumber(source) {
  let sum = 0;
  Object.keys(source).forEach(property => {
    sum += parseInt(source[`${property}`], 10);
  });
  return sum;
}
