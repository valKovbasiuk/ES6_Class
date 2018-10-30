class Currency {
  constructor(quantity = 1, ratioWithProto = 1, sign = "$") {
    this._quantity = quantity;
    this.ratioWithProto = ratioWithProto;
    this.sign = sign;
    this.count = 0;
  }
  get quantity() {
    return `"${this._quantity}""${this.sign}"`;
  }
  sum() {
    return this._quantity * this.ratioWithProto;
  }
  isCurrencyType(currency) {
    return this instanceof currency;
  }
}

class Dollar extends Currency {
  constructor() {
    this.count += 1;
  }
  static count() {
    return this.count;
  }
}
class Hryvna extends Currency {}
class Canadian extends Dollar {}
