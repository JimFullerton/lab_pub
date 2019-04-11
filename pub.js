class Pub {

  constructor(name, till, drinks) {
    this.name = name;
    this.till = till;
    this.drinks = drinks;
  }

  takeCash(amount) {
    this.till += amount;
  }

  checkAge(customer) {
    if (customer.age >= 18) {
      return true;
    } else {
      return false;
    }
  }

  checkDrunken(customer) {
    if (customer.drunkennessLevel < 10) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Pub;
