// ES6

class Currency {
  constructor(quantity = 1, ratioWithProto = 1, sign = "$") {
    this._quantity = quantity;
    this.ratioWithProto = ratioWithProto;
    this.sign = sign;
  }
  sum(money) {
    return new Dollar(
      (this._quantity += money._quantity * money.ratioWithProto)
    );
  }
  isCurrencyType(currency) {
    return this instanceof currency;
  }
}

class Dollar extends Currency {
  constructor(quantity, ratioWithProto, sign) {
    super(quantity, ratioWithProto, sign);
    Dollar.count += 1;
  }
  get quantity() {
    return `${this._quantity}${this.sign}`;
  }
}

Dollar.count = 0;

class Hryvna extends Currency {
  constructor(quantity, ratioWithProto = 0.65, sign = "UAH") {
    super(quantity, ratioWithProto, sign);
  }
}
class Canadian extends Dollar {
  constructor(quantity, ratioWithProto = 1.2, sign = "CAD") {
    super(quantity, ratioWithProto, sign);
  }
}

let pocketMoney = new Dollar(5);
console.log(pocketMoney instanceof Currency);
console.log(pocketMoney instanceof Dollar);
console.log(pocketMoney.quantity);
let stash = new Hryvna(200);
console.log(stash);
let total = pocketMoney.sum(stash);
console.log(stash.isCurrencyType(Hryvna));
console.log(total.isCurrencyType(Dollar));
console.log(total);
console.log(total.quantity);
console.log(Dollar.count);
