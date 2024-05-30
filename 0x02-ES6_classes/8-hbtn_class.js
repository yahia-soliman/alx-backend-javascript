export default class Airport {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](dataType) {
    const types = {
      number: this._size,
      string: this._location,
    };

    return types[dataType];
  }
}
