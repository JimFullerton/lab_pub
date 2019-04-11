const Pub = require('./pub')
const Drink = require('./drink')
const Customer = require('./customer')
const Transaction = require('./transaction')

describe('Pub', () => {

  let drink1;
  let drink2;
  let drink3;
  let drink4;
  let drink5;
  let drinks;
  let pub;
  let customer1;
  let customer2;
  let customer3;
  let transact1;

  beforeEach(() => {
    drink1 = new Drink('Beer', 4, 2);
    drink2 = new Drink('Wine', 5, 3);
    drink3 = new Drink('Whisky', 6, 1);
    drink4 = new Drink('Gin', 5.5, 1);
    drink5 = new Drink('Coke', 2.5, 0);
    drinks = [drink1, drink2, drink3, drink4, drink5];
    pub = new Pub("Oxford", 200, drinks);
    customer1 = new Customer("Alice", 50, 27, 0);
    customer2 = new Customer("Bob", 100, 37, 5);
    customer3 = new Customer("Junior", 15, 17, 0);
    transact1 = new Transaction(pub, customer1, 'Wine');
  });

  test('pub should have a name', () => {
    expect(pub.name).toBe("Oxford");
  });

  test('pub should have a till', () => {
    expect(pub.till).toBe(200);
  });

  test('pub should have drink', () => {
    expect(pub.drinks).toBe(drinks);
  });

  test('customer #1 should have a name', () => {
    expect(customer1.name).toBe("Alice");
  });

  test('customer #2 should have a wallet', () => {
    expect(customer2.wallet).toBe(100);
  });

  test('customer #3 should have an age', () => {
    expect(customer3.age).toBe(17);
  });

  test('customer #2 should be pre-drunk', () => {
    expect(customer2.drunkennessLevel).toBe(5);
  });

  test('drink #1 should have a name', () => {
    expect(drink1.name).toBe("Beer");
  });

  test('drink #4 should have a cost', () => {
    expect(drink4.price).toBe(5.5);
  });

  test('drink #2 should have a level of alcohol', () => {
    expect(drink2.alcoholLevel).toBe(3);
  });

  test('customer can buy drink', () => {
    customer1.payCash(5);
    expect(customer1.wallet).toBe(45);
  });

  test('pub can sell drink', () => {
    pub.takeCash(5);
    expect(pub.till).toBe(205);
  });

  test('pub can check customers age for underage', () => {
    expect(pub.checkAge(customer3)).toBe(false);
  });

  test('pub can check customers age for over 18', () => {
    expect(pub.checkAge(customer1)).toBe(true);
  });

  test('customer can get drunker', () => {
    customer1.getDrunker(3);
    expect(customer1.drunkennessLevel).toBe(3);
  });

  test('pub can check customers drunkenness for sober', () => {
    expect(pub.checkDrunken(customer2)).toBe(true);
  });

  test('pub can check customers drunkenness for drunk', () => {
    customer2.getDrunker(10);
    expect(pub.checkDrunken(customer2)).toBe(false);
  });

  test('simple full transaction', () => {
    transact1.buySellDrink();
    expect(customer1.drunkennessLevel).toBe(3);
    expect(customer1.wallet).toBe(45);
    expect(pub.till).toBe(205);
  });



});
