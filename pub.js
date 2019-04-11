class Pub {

  constructor(name, till, drinks) {
    this.name = name;
    this.till = till;
    this.drinks = drinks;
  }

  takeCash(amount) {
    this.till += amount;
  }

}

module.exports = Pub;
