import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

type TipoOperacao = "soma" | "subtracao" | "multiplicacao" | "divisao";

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  private readonly logger = inject(LoggerService);

  calcula(n1: number, n2: number, operacao: any) {
    switch (operacao) {
      case 'soma':
        return n1 + n2;
      case 'subtracao':
        return n1 - n2;
      case 'multiplicacao':
        return n1 * n2;
      case 'divisao':
        return n1 / n2;
      default:
        this.logger.log("Tipo de operação inválido.")
        return null;
    }
  }
}
