import { Injectable } from '@nestjs/common';
import { MathCalcService } from './functions/mathCalc.service';

@Injectable()
export class AppService {
  constructor(private mathCalcService: MathCalcService) {}

  getHello(): string {
    return 'Hello World!';
  }

  decompor(numero: number): any {
    let obj = {
      numero: numero,
      divisores: this.mathCalcService.retornaDivisores(numero),
      divisoresPrimos: this.mathCalcService.retornaPrimos(
        this.mathCalcService.retornaDivisores(numero),
      ),
    };
    return obj;
  }
}
