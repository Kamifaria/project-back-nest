import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getTypeOrmConfig = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.get('DB_HOST'),
  port: parseInt(config.get('DB_PORT', '5432')),
  username: config.get('DB_USERNAME'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_NAME'),
  entities: [__dirname + '/../orders/entities/*.entity.{ts,js}'],
  migrations: [__dirname + '/../migrations/*.{ts,js}'],
  synchronize: false,
  logging: true,
});