import * as readline from 'readline-sync';

function validarNota(nota: number): boolean {
  return !isNaN(nota) && nota >= 0 && nota <= 10;
}

function solicitarNota(mensagem: string): number {
  let nota: number;
  do {
    nota = parseFloat(readline.question(mensagem));
    if (!validarNota(nota)) {
      console.log('Entrada inválida. A nota deve ser um número entre 0 e 10.');
    }
  } while (!validarNota(nota));
  return nota;
}

function calcularNotaFinal(): void {
  const pesos = {
    prova1: 0.10,
    prova2: 0.10,
    prova3: 0.30,
    atividades: 0.20,
    api: 0.30
  };

  const notaProva1 = solicitarNota('Digite a nota da Prova 1 (0 a 10): ');
  const notaProva2 = solicitarNota('Digite a nota da Prova 2 (0 a 10): ');
  const notaProva3 = solicitarNota('Digite a nota da Prova 3 (0 a 10): ');
  const notaAtividades = solicitarNota('Digite a nota das Atividades (0 a 10): ');
  const notaAPI = solicitarNota('Digite a nota da API (0 a 10): ');

  const notaFinal = (
    notaProva1 * pesos.prova1 +
    notaProva2 * pesos.prova2 +
    notaProva3 * pesos.prova3 +
    notaAtividades * pesos.atividades +
    notaAPI * pesos.api
  );

  console.log(`A nota final do aluno é: ${notaFinal.toFixed(2)}`);
}

calcularNotaFinal();
