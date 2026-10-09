import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Emprendedor } from './emprendedores/entities/emprendedor.entity';
import { EmprendedoresModule } from './emprendedores/emprendedores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT ?? 3306),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Emprendedor],
      synchronize: true // SOLO en desarrollo, crea las tablas automáticamente
    }),
    EmprendedoresModule
  ],
})
export class AppModule {}