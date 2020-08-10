export default function find00OldPerson(collection) {
  const targetPerson = collection.find(person => person.age <= 20);
  return targetPerson.name;
}
