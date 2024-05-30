export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() { return this._name; }

  set name(value) {
    if (typeof value === 'string') this._name = value;
    else throw new TypeError('Name must be a string');
  }

  get length() { return this._length; }

  set length(value) {
    if (typeof value === 'number') this._length = value;
    else throw new TypeError('Lenght must be a number');
  }

  get students() { return this._students; }

  set students(value) {
    if (!Array.isArray(value) || value.find((s) => typeof s !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
