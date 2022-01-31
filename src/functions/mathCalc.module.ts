import { Module } from '@nestjs/common';
import { MathCalcService } from './mathCalc.service';

@Module({
  providers: [MathCalcService],
  exports: [MathCalcService],
})
export class MathCalcModule {}
