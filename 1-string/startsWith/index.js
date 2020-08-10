export default function collectCarNumberCount(collection) {
  let count = 0;
  collection.forEach(carNumber => {
    if (carNumber.indexOf('粤A') === 0) {
      count += 1;
    }
  });
  return count;
}
