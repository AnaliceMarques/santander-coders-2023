class ContaBancaria implements OperacoesBancarias {
  private numeroConta: string;
  private saldo: number;
  titular: string;

  constructor(numeroConta: string, saldo: number, titular: string) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.titular = titular;
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  depositar(valor: number): void {
    this.saldo += valor;
    Logger.deposito(valor);
  }

  sacar(valor: number): void {
    this.saldo -= valor;
    Logger.saque(valor);
  }

  public get _numeroConta(): string {
    return this.numeroConta;
  }

  public get _saldo(): number {
    return this.saldo;
  }
}

class ContaPoupanca extends ContaBancaria implements OperacoesBancarias {
  juros: number;

  constructor(
    numeroConta: string,
    saldo: number,
    titular: string,
    juros: number
  ) {
    super(numeroConta, saldo, titular);
    this.juros = juros;
  }

  consultarSaldo(): number {
    return this._saldo + this.juros;
  }
}

interface OperacoesBancarias {
  depositar(valor: number): void;
  sacar(valor: number): void;
}

class Logger {
  static deposito(valor: number): void {
    console.log(`Deposito realizado no valor de ${valor}`);
  }

  static saque(valor: number): void {
    console.log(`Saque realizado no valor de ${valor}`);
  }
}

const contaBancaria = new ContaBancaria("Teste", 100, "Titular1");

const contaPoupanca = new ContaPoupanca("Teste", 100, "Titular1", 10);

console.log(contaBancaria);
console.log(contaBancaria.consultarSaldo());
contaBancaria.depositar(10);
contaBancaria.sacar(50);
console.log(contaBancaria.consultarSaldo());

console.log(contaPoupanca);
console.log(contaPoupanca.consultarSaldo());
contaPoupanca.depositar(40);
contaPoupanca.sacar(50);
console.log(contaPoupanca.consultarSaldo());
