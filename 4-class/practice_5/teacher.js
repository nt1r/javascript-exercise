import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass = null) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return this.klass === null
      ? `${super.introduce()} I am a Teacher. I teach No Class.`
      : `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
  }
}
