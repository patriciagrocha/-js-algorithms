class BankAccount {
  constructor(branch, number, type) {
    this.branch = branch;
    this.number = number;
    // this.type = type;
    this._balance = 0;
  }
  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  withdraw(value) {
    if (value > this._balance) {
      return console.log(`Operação negada,saldo insuficiente. Saldo atual R$ ${this._balance},00`);;
    }
    this._balance = this._balance - value;

    return this._balance;
  }
  deposit(value) {
    this._balance = this._balance + value;
    return this._balance;
  }
}

//criando classe filha

class CurrentAccount extends BankAccount {
  constructor(branch, number, creditCard) {
    super(branch, number);
    this.type = "current";//valor padrão
    this._creditCard = creditCard;
  }
  get creditCard(){
    return this._creditCard;
  }
  set creditCard(value){ //value boolean, para dizer se a pessoa tem cartão ou não
    this._creditCard = value;
  }
}

class SavingsAccount extends BankAccount{
    constructor(branch, number) {
        super(branch, number);
        this.tipo = 'savings';
    }
}

class UniversityAccount extends BankAccount{
    constructor(branch, number) {
        super(branch, number);
        this.type = 'university';
    }
    withdraw(value){
        if(value > 500 || value > this._balance) {
            return console.log('Operação negada, limite excedido!');
        }
        this._balance = this._balance - value;
    }
}

// const minhaConta = new CurrentAccount(1,859,true);
// console.log(minhaConta);
// minhaConta.deposit(1000);
// console.log(minhaConta._balance);
// minhaConta.withdraw(500);
// console.log(minhaConta._balance);
// minhaConta.withdraw(600);

const contaPoup = new SavingsAccount(1, 859);

// contaPoup.deposit(1000);
// console.log(contaPoup._balance);
// contaPoup.withdraw(600);
// console.log(contaPoup._balance);
// contaPoup.withdraw(500);


const contaUni = new UniversityAccount(1,859);

contaUni.deposit(1000);
console.log(contaUni._balance);
contaUni.withdraw(400);
console.log(contaUni._balance);
contaUni.withdraw(500);
console.log(contaUni._balance);
contaUni.withdraw(500);
