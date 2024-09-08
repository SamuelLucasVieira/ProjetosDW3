import * as readlineSync from 'readline-sync';

function calculate(num1: number, num2: number, opcao: string): number | string {
  switch (opcao) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Erro: Divisão por zero.';
      }
      return num1 / num2;
    default:
      return 'Operador inválido. Use +, -, * ou /.';
  }
}

function askNumber(prompt: string): number {
  let num: number;
  while (true) {
    const input = readlineSync.question(prompt);
    num = parseFloat(input);
    if (!isNaN(num)) {
      break;
    }
    console.log('Entrada inválida. Por favor, insira um número válido.');
  }
  return num;
}

function askOperator(): string {
  const validOperators = ['+', '-', '*', '/'];
  while (true) {
    const opcao = readlineSync.question('Digite o operador (+, -, *, /): ');
    if (validOperators.includes(opcao)) {
      return opcao;
    }
    console.log('Operador inválido. Por favor, use +, -, * ou /.');
  }
}

function processInput() {
  const num1 = askNumber('Digite o primeiro numero: ');
  const num2 = askNumber('Digite o segundo numero: ');
  const opcao = askOperator();
  const result = calculate(num1, num2, opcao);
  console.log(`Resultado: ${result}`);
}

processInput();
