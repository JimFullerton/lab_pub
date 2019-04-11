class Transaction {

  constructor(pub, customer, purchase) {
    this.pub = pub;
    this.customer = customer;
    this.purchase = purchase;
  }

  buySellDrink() {
    let units = 0;
    let cost = 0;

    if (this.pub.checkAge(this.customer)) {
      if (this.pub.checkDrunken(this.customer)) {
        for (var i = 0; i < this.pub.drinks.length; i++) {
          if (this.pub.drinks[i].name === this.purchase) {
            units = this.pub.drinks[i].alcoholLevel;
            cost = this.pub.drinks[i].price;
            break;
          }
        }
        this.customer.getDrunker(units);
        this.customer.payCash(cost);
        this.pub.takeCash(cost);
      }
    }
  }
}

module.exports = Transaction;
