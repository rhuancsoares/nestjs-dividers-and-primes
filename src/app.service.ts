import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  decompor(numero: number): any {
    let obj = {
      numero: numero,
      divisores: this.retornaDividores(numero),
      divisoresPrimos: this.retornaPrimos(this.retornaDividores(numero)),
    };
    return obj;
  }

  private retornaDividores(numeroEntrada: number) {
    let dividores = [];
    for (let i = 1; i <= numeroEntrada; i++) {
      if (numeroEntrada % i === 0) {
        dividores.push(i);
      }
    }
    return dividores;
  }

  private retornaPrimos(numerosDividores: any) {
    let primos = [];

    for (let i in numerosDividores) {
      let divisores = 0;
      let numeroTestado = numerosDividores[i];
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
