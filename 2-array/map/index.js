export default function numberMapToWord(collection) {
  return collection.map(number => String.fromCharCode('a'.charCodeAt(0) + number - 1));
}
