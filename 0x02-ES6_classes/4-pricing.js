import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  get amount() { return this._amount; }

  set amount(value) {
    if (typeof value === 'number') this._amount = value;
    else throw new TypeError('Amount must be a number');
  }

  get currency() { return this._currency; }

  set currency(value) {
    if (value instanceof Currency) this._currency = value;
    else throw new TypeError('Currency must be a currency');
  }
}
