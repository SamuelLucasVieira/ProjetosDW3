import * as readlineSync from 'readline-sync';

function converterComprimento(valor: number, unidadeOrigem: string, unidadeDestino: string): number | string {
  if (unidadeOrigem === 'm' && unidadeDestino === 'km') {
    return valor / 1000;
  } else if (unidadeOrigem === 'km' && unidadeDestino === 'm') {
    return valor * 1000;
  } else if (unidadeOrigem === unidadeDestino) {
    return valor;
  } else {
    return 'Conversão de comprimento não suportada.';
  }
}

function converterPeso(valor: number, unidadeOrigem: string, unidadeDestino: string): number | string {
  if (unidadeOrigem === 'g' && unidadeDestino === 'kg') {
    return valor / 1000;
  } else if (unidadeOrigem === 'kg' && unidadeDestino === 'g') {
    return valor * 1000;
  } else if (unidadeOrigem === unidadeDestino) {
    return valor;
  } else {
    return 'Conversão de peso não suportada.';
  }
}

function converterTemperatura(valor: number, unidadeOrigem: string, unidadeDestino: string): number | string {
  if (unidadeOrigem === 'C' && unidadeDestino === 'F') {
    return (valor * 9/5) + 32;
  } else if (unidadeOrigem === 'F' && unidadeDestino === 'C') {
    return (valor - 32) * 5/9;
  } else if (unidadeOrigem === unidadeDestino) {
    return valor;
  } else {
    return 'Conversão de temperatura não suportada.';
  }
}

function converter(valor: number, unidadeOrigem: string, unidadeDestino: string, tipo: string): number | string {
  switch (tipo) {
    case 'comprimento':
      return converterComprimento(valor, unidadeOrigem, unidadeDestino);
    case 'peso':
      return converterPeso(valor, unidadeOrigem, unidadeDestino);
    case 'temperatura':
      return converterTemperatura(valor, unidadeOrigem, unidadeDestino);
    default:
      return 'Tipo de conversão não suportado.';
  }
}

function askValidUnit(prompt: string, validUnits: string[]): string {
  let unit: string;
  while (true) {
    unit = readlineSync.question(prompt).toLowerCase();
    if (validUnits.includes(unit)) {
      return unit;
    }
    console.log('Unidade inválida. Por favor, insira uma unidade válida.');
  }
}

function askValidConversionType(): string {
  const validTypes = ['comprimento', 'peso', 'temperatura'];
  let tipo: string;
  while (true) {
    tipo = readlineSync.question('Digite o tipo de conversao (comprimento, peso, temperatura): ').toLowerCase();
    if (validTypes.includes(tipo)) {
      return tipo;
    }
    console.log('Tipo de conversão inválido. Por favor, insira um tipo válido (comprimento, peso, temperatura).');
  }
}

function processInput() {
  const valor = readlineSync.questionFloat('Digite o valor a ser convertido: ');

  const tipo = askValidConversionType();

  let unidadeOrigem: any;
  let unidadeDestino: any;
  switch (tipo) {
    case 'comprimento':
      unidadeOrigem = askValidUnit('Digite a unidade de origem (m, km): ', ['m', 'km']);
      unidadeDestino = askValidUnit('Digite a unidade de destino (m, km): ', ['m', 'km']);
      break;
    case 'peso':
      unidadeOrigem = askValidUnit('Digite a unidade de origem (g, kg): ', ['g', 'kg']);
      unidadeDestino = askValidUnit('Digite a unidade de destino (g, kg): ', ['g', 'kg']);
      break;
    case 'temperatura':
      unidadeOrigem = askValidUnit('Digite a unidade de origem (C, F): ', ['c', 'f']);
      unidadeDestino = askValidUnit('Digite a unidade de destino (C, F): ', ['c', 'f']);
      break;
  }

  const resultado = converter(valor, unidadeOrigem, unidadeDestino, tipo);
  console.log(`Resultado: ${resultado}`);
}

processInput();
