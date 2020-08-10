function chooseMultiplesOfThree(collection) {
  return collection.filter(number => number % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return collection.filter((number, index) => collection.indexOf(number) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
