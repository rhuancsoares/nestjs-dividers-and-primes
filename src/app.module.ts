import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathCalcModule } from './functions/mathCalc.module';

@Module({
  imports: [MathCalcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
