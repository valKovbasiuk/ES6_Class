// ES5

function Currency(quantity, ratioWithProto, sign) {
  this._quantity = quantity || 1;
  this.ratioWithProto = ratioWithProto || 1;
  this.sign = sign || "$";
}

Currency.prototype.isCurrencyType = function(currency) {
  return this instanceof currency;
};

Currency.prototype.sum = function(money) {
  return new Dollar((this._quantity += money._quantity * money.ratioWithProto));
};

function Dollar(quantity, ratioWithProto, sign) {
  Currency.call(this, quantity, ratioWithProto, sign);
  Dollar.count += 1;
}

Dollar.prototype = Object.create(Currency.prototype);

Object.defineProperty(Dollar.prototype, "constructor", {
  value: Dollar,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});

Dollar.quantity = function() {
  return "".concat(this._quantity).concat(this.sign);
};

Object.defineProperty(Dollar.prototype, "quantity", {
  get: function() {
    return "".concat(this._quantity).concat(this.sign);
  }
});

Dollar.count = 0;

function Hryvna(quantity, ratioWithProto, sign) {
  this.ratioWithProto = ratioWithProto || 0.65;
  this.sign = sign || "UAH";
  Currency.call(this, quantity, ratioWithProto, sign);
}

Hryvna.prototype = Object.create(Currency.prototype);

Object.defineProperty(Hryvna.prototype, "constructor", {
  value: Hryvna,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});

function Canadian(quantity, ratioWithProto, sign) {
  this.ratioWithProto = ratioWithProto || 1.2;
  this.sign = sign || "CAD";
  Currency.call(this, quantity, ratioWithProto, sign);
}

Canadian.prototype = Object.create(Currency.prototype);

Object.defineProperty(Canadian.prototype, "constructor", {
  value: Canadian,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});

var pocketMoney = new Dollar(5);
console.log(pocketMoney instanceof Currency);
console.log(pocketMoney instanceof Dollar);
console.log(pocketMoney.quantity);
var stash = new Hryvna(200);
console.log(stash);
var total = pocketMoney.sum(stash);
console.log(stash.isCurrencyType(Hryvna));
console.log(total.isCurrencyType(Dollar));
console.log(total);
console.log(total.quantity);
console.log(Dollar.count);
