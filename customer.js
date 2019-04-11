class Customer {

  constructor(name, wallet, age, drunkennessLevel) {
    this.name = name;
    this.wallet = wallet;
    this.age = age;
    this.drunkennessLevel = drunkennessLevel;
  }

  payCash(amount) {
    this.wallet -= amount;
  }
}

module.exports = Customer;
