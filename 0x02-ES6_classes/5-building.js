export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building && !(this.evacuationWarningMessage instanceof Function)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() { return this._sqft; }

  set sqft(value) {
    if (typeof value === 'number') this._sqft = value;
    else throw new TypeError('Amount must be a number');
  }
}
