import { Injectable } from '@angular/core';

type TipoOperacao = "soma" | "subtracao" | "multiplicacao" | "divisao";

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  calcula(n1: number, n2: number, operacao: TipoOperacao) {
    switch (operacao) {
      case 'soma':
        return n1 + n2;
      case 'subtracao':
        return n1 - n2;
      case 'multiplicacao':
        return n1 * n2;
      case 'divisao':
        return n1 / n2;
    }
  }
}
