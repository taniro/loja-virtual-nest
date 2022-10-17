import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { Cliente } from './cliente/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    database:"auladbjs",
    port:5432,
    username:"postgres",
    password:"postgres",
    entities:[Cliente],
    synchronize:true,
    logging:true
  }), ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
