import { Injectable } from '@nestjs/common';
@Injectable()
export class MathCalcService {
  retornaDivisores(numeroEntrada: number) {
    let divisores = [];
    for (let i = 1; i <= numeroEntrada; i++) {
      if (numeroEntrada % i === 0) {
        divisores.push(i);
      }
    }
    return divisores;
  }

  retornaPrimos(numerosDivisores: any) {
    let primos = [];

    for (let i in numerosDivisores) {
      let divisores = 0;
      let numeroTestado = numerosDivisores[i];
      for (let count = 1; count <= numeroTestado; count++) {
        if (numeroTestado % count === 0) {
          divisores++;
        }
      }

      if (divisores == 2 || numeroTestado === 1) {
        primos.push(numeroTestado);
      }
    }
    return primos;
  }
}
